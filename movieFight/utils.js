const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args); // apply takes all params as array and seperate args to the original function
    }, delay);
  };
};
