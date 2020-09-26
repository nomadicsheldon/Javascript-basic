# Javascript-basic

## Variables
1. let - you can change the value defined by let.
2. const - you can't change the value defined by const.

#### typeof
```javascript
typeof "name" //string
typeof 34 //number
```

---

## Primitive Types

1. Numbers
2. Boolean
3. String (are immutable in javascript)
4. Null
5. Undefined

### Number
#### remainder / modulus operator
```javascript
10 % 6
```
output = 4

#### exponential operator
```javascript
2 ** 3
```
output = 8

#### NaN
```javascript
0/0 //NaN
1 + NaN //NaN
```
#### Infinity
```javascript
1/0 //Infinity
-1/0 //-Infinity
```
### String

#### quote
```javascript
'sdasda "asdasda"' //valid
"aadsd 'sdfsdfsd'" //valid
```
#### adding
```javascript
"a" + 1 // output - "a1"
```
#### length
```javascript
"hello".length //output - 5
```
#### Indexes
```javascript
let name = "Himanshu"
name[1] // i
```
#### string methods
```javascript
let name = "Himanshu"
name.toUpperCase(); // "HIMANSHU"

let lastName = "   Rajput   "
lastName.trim(); // "Rajput" <=removes leading and trailing spaces.

let fullname = "himanshuRajput"
fullname.indexOf("himanshu"); // 0
fullname.indexOf("Rajput"); // 8
fullname.indexOf("a"); // 3
fullname.indexOf("z"); // -1

fullname.slice(0, 8) // "himanshu"
fullname.slice(8) // "rajput"

fullname.replace("rajput", "himanshu") // "himanshuhimanshu" <= replace first occurence 
```

#### String Escaping
\n - Newline
\' - single quote
\" - double quote
\\ - backslash
```javascript
'hello\'world\'' // hello'world'
"hello\"world\"" // hello"world"
"\\" // "\"
```

#### String Template Literals
```javascript
`here is sum ${1+3}`

let player = "sachin"
let score = "100"
`${player} scores ${score}!` // sachin scores 100!
`${player.toUpperCase()} scores ${score}!` // SACHIN scores 100!
```

### Null & Undefined
Null - 
1. "Intentional absence of any value"
2. Must be assigned

Undefined - 
1. Variables that do not have an assigned value are undefined.

---

## Math Object

```javascript
Math.PI // 3.14159265

// Rounding a number
Math.round(3.9) // 4

// Removes decimal
Math.floor(3.7777) //3

// Absolute value
Math.abs(-23) // 23

// 2 to the 5th power
Math.pow(2, 5) // 32

// Get random number
Math.random();
```

## ParseInt & ParseFloat

```javascript
parseInt("24") //24
parseInt("24.987") //24
parseInt("24dayslater") //24
parseInt("days24later") //NaN

parseFloat("24.987") //24.987
parseFloat("7") //7
parseFloat("i am 3") //NaN
```
---

## Controlling Program Logic and Flow

### Double equal and Triple equal

Double equal - 
1. Checks for equality of value, but not equality of type.
2. It coerces both values to the same type and then compares them.
3. This can lead to some unexpected results!

```javascript
5 == 5; //true
"b" == "c"; //false
7 == "7"; //true
0 == ""; //true
true == false; //false
0 == false; //true
null == undefined; //true
```

Triple equal -
1. checks for equality of value AND type

```javascript
5 === 5; //true
1 === 2; //false
2 === "2"; //false
false === 0; //false

10 != "10"; //false
10 !== "10"; //true
```
>Always Use === and !==

### Syntax of `if`, `elseif`, `else`
```javascript
if (condition) {

} elseif(condition) {

} else {

}
```

### Logical operator
```javascript
&& //AND
|| //OR
! //NOT
```

#### Operator Precedence
`!` has higher precedence than `&&` has higher precedence than `||`
```javascript
let x = 7;
x == 7|| x === 3 && x > 10; //true
```

### Syntax of `switch`
```javascript
Switch (key) {
  case key:
    break;
  case key:
    break;
  default:
    break;
}
```
`break` is needed, if you will not put `break` then it will execute all cases after the success case.

### Ternary Operator
> condition ? expIfTrue: expIfFalse

```javascript
let num = 7;
num === 7 ? console.log("yo") : console.log("no");
```

---

## Console
```javascript
console.log();
console.error(); // shows as warning in log.
console.dir(...);
```
---
## Array

### creating
```javascript
let arr = [];
let arr = [1,2,3,4];
new Array(1,2,3,4);
```
### indexes
```javascript
arr[2];
```
### modifing Array
```javascript
arr[2] = 4;
```
### Push and Pop Array
Push - adds element at the end of the array.
Pop - remove element from end
```javascript
arr.push(45);
arr.pop();
```
### Shift and Unshift
Shift - remove from start
Unshift - add to start
```javascript
arr.unshift(12);
arr.shift();
```
### concat
```javascript
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
arr1.concat(arr2);
```
### includes() and IndexOf
includes() gives true and false.
IndexOf() gives -1 if value doesn't exist in array otherwise index of element.

### reverse() and Join
reverse() - reverse the array and changes the arr1 as well.
Join() -
```javascript
let arr1 = [1,2,3,4];
arr1.reverse(); // result [4,3,2,1]

arr1.join() // result 4,3,2,1
arr1.join(" ") // result 4 3 2 1
arr1.join("-") // result 4-3-2-1
```
### slice()
```javascript
let arr1 = [111,22,33,44];
arr1.slice(0, 2) // result = [111, 22]
arr1.slice(2) // result = [33, 44]
arr1.slice(-1) // result = [44]
arr1.slice() // result [111,22,33,44]
```
> you can make copy of array like this- `arr1.slice()`

---
## Object(called dictionary as well)
1. Object are collection of properties.
2. Properties are a key-value pair
3. rather than accessing data using index, we use custom keys.

```javascript
const data = {
  totalSteps: 2435,
  sleep: "5hr",
  workoutsThisWeek: 5
};
```

### accessing 
```javascript
data.totalSteps // 2435
data["totalSteps"]
```

### updating and adding
```javascript
const data = {
  totalSteps: 2435,
  sleep: "5hr",
  workoutsThisWeek: 5
};

data["calories"] = 23 // adding
data.calories = 23 // adding

data["calories"] += 20 // updating
data.calories += 23 // updating
```
---

## Loop

### For Loop
```javascript
for(let i = 1, i <= 10, i++) {
  // execute
}
```

### For...OF Loop
```javascript
for(variable of iterable) {
  statement
}

let arr = [111,22,33,44];
for (let value of arr) {
  console.log(value);
}

const data = {
  totalSteps: 2435,
  sleep: "5hr",
  workoutsThisWeek: 5
};
for (let x of Object.keys(data)) {
  console.log(x, data[x]);
}

Object.values(data); // for getting all values
```

### For...In Loop
It will iterate only key of object.
```javascript
const data = {
  totalSteps: 2435,
  sleep: "5hr",
  workoutsThisWeek: 5
};
for (let x in data) {
  console.log(x); // output totalSteps => sleep => workoutsThisWeek
}
```

### While Loop
```javascript
let num = 0
while (num < 10) {
  //execute
  num ++
}

while(true) { // infinite loop
  //execute task
  if (condition) {
    break;
  }
}
```
---

## Function
```javascript
// Basic function
function funcName() {
  // do something
}

// function with argument
function funcName(arg) {
  // do something
}

// function with mutliple argument
function funcName(arg1, arg2) {
  // do something
}

// function with return
function funcName(arg1, arg2) {
    return arg1 + arg2
}

// function expressions
const square = function (num) {
  return num * num;
}
square(7);

// function as return values
function multiplyWithNumber(num) {
  return function (x) {
    return x * num;
  };
}

let multiply = multiplyWithNumber(5)
let triple = multiply(3)

// Callback functions
function callTwice(func) {
  func();
  func();
}

function hello() {
  console.log("Hello");
}

callTwice(hello);
```
### Arrow function
```javascript
const square = function(x) {
    return x * x;
}

const square = (x) => {
    return x * x;
}

const square = (x) => ( x * x )

const square = (x) => x * x;
```

### forEach
```javascript
const nums = [23, 34, 12, 35, 67, 27];

nums.forEach(function (num) {
  console.log(num * 2);
});

nums.forEach(function (num, idx) {
  console.log(num * 2, idx);
});

nums.forEach((num, idx) => console.log(num * 2, idx))
```

### Map
```javascript
const nums = [23, 34, 12, 35, 67, 27];

const newNums = nums.map(function (num) {
  return num * 12;
});

const newNums = nums.map(num => num * 12);

console.log(newNums);
```

### Find
```javascript
const nums = [23, 34, 12, 35, 67, 27];

const matchedNum = nums.find( num => num % 2 === 0) // firstmatch return
```

### Filter
```javascript
const nums = [23, 34, 12, 35, 67, 27];

const matchedNums = nums.filter( num => num % 2 === 0) // matched array
```

### Every
If every element satisfied the condition.
```javascript
const nums = [23, 34, 12, 35, 67, 27];

const match = nums.every( num => num > 50) // returns false
```

### Some
If any element satisfy the condition.
```javascript
const nums = [23, 34, 12, 35, 67, 27];

const match = nums.some( num => num > 50) // returns true 
```

### Sort
```javascript
const nums = [23, 34, 12, 35, 67, 27];

const sorted = nums.sort( (a, b) => a - b) // ascending  
const sorted = nums.sort( (a, b) => b - a) // descending
```

### reduce
```javascript
const nums = [23, 34, 12, 35, 67, 27];
const sum = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

const max = nums.reduce((maxValue, currentValue) => {
  return Math.max(maxValue, currentValue)
});
```
---
## Default Parameters
```javascript
function multiply(x, y=1) {
  return x * y;
}
```
---

## Spread for Function Calls
You can use for any iterable type `String`, `Array`
```javascript
//Example 1:
const nums = [23, 34, 12, 35, 67, 27];
Math.max(...nums); // taking element out of array and a single elements

//Example 2:
const nums1 = [1, 2, 3, 4, 5];
const nums2 = [6, 7, 8, 9, 10];
const combinedNums = [...nums1, ...nums2];

const nums1Copy = [...nums1];

//Example 3:
const personalDetail = {
  name: "Himanshu",
  gender: "Male",
};

const bioDetails = {
  height: 165,
  weight: 65,
};

const profileInfo = {
  ...personalDetail,
  ...bioDetails,
  isLoggedIn: true,
};

//cloning
const profileInfoClone = {...profileInfo}
```
---

## Arguments
```javascript
function sum() {
  const args = [...arguments];
  return args.reduce((total, currentVal) => {
    return total + currentVal;
  });
}

sum(1,2,3,4,45)

function fullName(firstName, lastName) {
  console.log(arguments);
}
```
> Argument will not be available in arrow function

## Rest Parameters
```javascript
function sum(...nums) {
  return nums.reduce((total, currentVal) => { // nums will be array
    return total + currentVal;
  });
}

sum(1,2,3,4,45)

function fullName(firstName, lastName, ...titles) { // titles will be array
  console.log(firstName, lastName, titles);  // "Himanshu", "rajput", ["iOS Developer", "fullstack developer"]
}

fullName("Himanshu", "rajput", "iOS Developer", "fullstack developer")

const sum = (...nums) => {
  return nums.reduce((total, currentVal) => { // nums will be array
    return total + currentVal;
  });
}
```
---

## Destructuring
```javascript
// Array
const names = ["Himanshu", "Shivanshu", "Aman", "Ayush"];
const [name1, name2, name3, name4] = names; // destructuring in array
const [name1, ,...others] = names; // destructuring in array and escaping one element
const [name1, ...others] = names; // destructuring in array

// Object
const personalDetail = {
  name: "Himanshu",
  gender: "Male",
  height: 165,
  weight: 65
};
const {name, height} = personalDetail; // order doesn't matter here.

const {name: myName} = personalDetail; // change the key name for better reading, now you can use "myName"

const {name, height, ...others} = personalDetail;
```
---

## Shorthand Object Properties
```javascript
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, current) => sum + current);
  const avg = sum / arr.length;
  return {
    max,
    min,
    sum,
    avg,
  };
};

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);
```

## Computed Properties
> We can use a variable as a key name in an object literal property!
```javascript
const name = "Himanshu";

const userRoles = {
  [name]: "Admin"    //<= name is computed Property here
};

userRoles; //{"Himanshu": "Admin"}
```
---

## This
`this` refers to current execution scope.
---

## DOM
```javascript
document.getElementById("myId"); //To select the element with id of "myId"

document.getElementsByTagName("p"); // It will return an array of elements with tag of "p" 

document.getElementsByClassName("myClassName"); // It will return an array of elements with class name of "myClassName"

// QuerySelector
document.querySelector("h1"); // selecting tag
document.querySelector("#myId"); // selecting based on Id.
document.querySelector(".myClassName"); // selecting based on Class.
document.querySelector("h1.myClassName"); // selecting more specific on tag a perticular class.

document.querySelector("section ul li.myClassName"); // selecting more specific.
document.querySelector('input[type="password"]'); // selecting more specific.

document.querySelectorAll("h1") // all h1 element got selected and return as an array
```





