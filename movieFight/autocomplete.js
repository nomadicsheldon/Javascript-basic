const createAutocomplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
}) => {
  root.innerHTML = `
<label><b>Search</b></label>
<input class="input" />
<div class="dropdown">
    <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
    </div>
</div>
`;

  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

  const onInput = async (event) => {
    const items = await fetchData(event.target.value); // fetch is async function

    // if items array is empty then remove the dropdown menu
    if (!items.length) {
      dropdown.classList.remove("is-active");
      return;
    }
    resultsWrapper.innerHTML = ""; // clearing previous listing
    dropdown.classList.add("is-active");
    for (let item of items) {
      const option = document.createElement("a");

      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(item);

      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = inputValue(item);
        onOptionSelect(item);
      });
      resultsWrapper.appendChild(option);
    }
  };

  input.addEventListener("input", debounce(onInput, 500));

  // handing: clicking outside the "root" element, remove the dropdown menu
  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
