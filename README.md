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
---
