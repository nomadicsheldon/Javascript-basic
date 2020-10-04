const autoCompleteConfig = {
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
        <img src="${imgSrc}" />
        ${movie.Title} ${movie.Year}
        `;
  },
  inputValue(movie) {
    return movie.Title;
  },
  async fetchData(searchTxt) {
    const respose = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "d7383a2a",
        s: searchTxt,
      },
    });

    if (respose.data.Error) {
      return [];
    }

    return respose.data.Search;
  },
};

createAutocomplete({
  ...autoCompleteConfig,
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#left-summary"), "left");
  },
});

createAutocomplete({
  ...autoCompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#right-summary"), "right");
  },
});

let leftMovie;
let rightMovie;
const onMovieSelect = async (movie, summaryElement, side) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "d7383a2a",
      i: movie.imdbID,
    },
  });
  summaryElement.innerHTML = movieTemplate(response.data);

  if (side === "left") {
    leftMovie = response.data;
  } else {
    rightMovie = response.data;
  }

  if (leftMovie && rightMovie) {
    runComparison();
  }
};

const runComparison = () => {
  const leftSideStats = document.querySelectorAll(
    "#left-summary .notification"
  );
  const rightSideStats = document.querySelectorAll(
    "#right-summary .notification"
  );

  leftSideStats.forEach((leftStat, idx) => {
    const rightStat = rightSideStats[idx];

    const leftSideValue = parseInt(leftStat.dataset.value);
    const rightSideValue = parseInt(rightStat.dataset.value);
    if (rightSideValue > leftSideValue) {
      leftStat.classList.remove("is-primary");
      leftStat.classList.add("is-warning");
    } else {
      rightStat.classList.remove("is-primary");
      rightStat.classList.add("is-warning");
    }
  });
};

const movieTemplate = (movieDetail) => {
  // $623,343,454 => 623343454
  //   const dollars = parseInt(
  //     movieDetail.BoxOffice.replace(/\$/g, "").replace(/,/g, "")
  //   );

  const metaScore = parseInt(movieDetail.metaScore);
  const imdbRating = parseFloat(movieDetail.imdbRating);
  const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ""));
  const awards = movieDetail.Awards.split(" ").reduce((result, currentVal) => {
    const value = parseInt(currentVal);

    if (isNaN(value)) {
      return result;
    } else {
      return result + value;
    }
  }, 0);

  return `
        <article class="media">
            <figure class="media-left">
                <p class="image">
                    <img src="${movieDetail.Poster}">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <h1>${movieDetail.Title}</h1>
                    <h4>${movieDetail.Genre}</h4>
                    <p>${movieDetail.Plot}</p>
                </div>
            </div>
        </article>
        <article data-value=${awards} class="notification is-primary">
            <p class="title">${movieDetail.Awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article data-value=${movieDetail.BoxOffice} class="notification is-primary">
            <p class="title">${movieDetail.BoxOffice}</p>
            <p class="subtitle">Box Office</p>
        </article>
        <article data-value=${metaScore} class="notification is-primary">
            <p class="title">${movieDetail.Metascore}</p>
            <p class="subtitle">Metascore</p>
        </article>
        <article data-value=${imdbRating} class="notification is-primary">
            <p class="title">${movieDetail.imdbRating}</p>
            <p class="subtitle">IMDB Rating</p>
        </article>
        <article data-value=${imdbVotes} class="notification is-primary">
            <p class="title">${movieDetail.imdbVotes}</p>
            <p class="subtitle">IMDB Votes</p>
        </article>
    `;
};
