module.exports = {
    // making own for each
    forEach(arr, fn) {
        for (let i = 0; i < arr.length; i++) {
            const value = arr[i];
            fn(value, i);
        }
    },

    map(arr, fn) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i));
        }

        return result;
    }
};