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
```
