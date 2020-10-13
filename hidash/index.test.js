const assert = require("assert");
const { forEach, map } = require("./index");

// const test = (desc, fn) => {
//     console.log("---", desc);
//     try {
//         fn();
//     } catch(err) {
//         console.log(err.message);
//     }
// };

// test("The forEach function", () => {
//     let sum = 0;
//     forEach([1,2,3], value => {
//     sum += value;
// });

// assert.strictEqual(sum, 7, "Expected summing array to equal 6");

// });


// test("The map function", () => {
//     const result = map([1,2,3], value => {
//         return value * 2;
//     });
    
//     assert.strictEqual(result[0], 2, `Expected to find 2, but found ${result[0]}`);
//     assert.strictEqual(result[1], 4, `Expected to find 4, but found ${result[1]}`);
//     assert.strictEqual(result[2], 7);
// });

// using mocha here
it("The forEach function", () => {
    let sum = 0;
    forEach([1,2,3], value => {
    sum += value;
});

assert.strictEqual(sum, 6, "Expected summing array to equal 6");

});


it("The map function", () => {
    const result = map([1,2,3], value => {
        return value * 2;
    });
    
    assert.strictEqual(result[0], 2, `Expected to find 2, but found ${result[0]}`);
    assert.strictEqual(result[1], 4, `Expected to find 4, but found ${result[1]}`);
    assert.strictEqual(result[2], 6);
});
