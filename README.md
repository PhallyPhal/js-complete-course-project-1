# Course Notes

## Variables

### Data Types
- In many cases, javascript treats variables like strings.
- There are 
  1. integers (whole numbers)
  2. floats (decimal numbers)
  3. strings (text)
  4. booleans (true and false)
  5. objects (a data object) <br> EX: `x = {name: 'phal', age: 33}`
     -  Defined within curly braces {}
  6. arrays (a list of data) <br> EX: `x = [5, 1, 3];` 

#### Arrays
- Arrays function similar to other programming languages.
- Arrays are zero-based.
- Some of the functions belonging to array are as follows:

```javascript
let array = []
//Initialized with square brackets.

array.push(5);
//array is now [5]
array.push(3);
//array is now [5, 3]

array[0];
//accessed the array at index 0 and returns its value
//output: is 5
```

#### Objects
- Syntax: <br>
  ```javascript
  let myself = {};
  myself = {
      ethnicity: "white",
      age: 55,
      weight: 180,
      bloodType: "unkown",
      firstName: "Justin",
      LastName: "Miller"
  };
  ```

- You can access pieces of the object with the following syntax: <br>
```javascript
let myself = {
    ethnicity: "mixed",
    age: 220,
    weight: 2500
};
alert(myself.age);
//OUTPUT: 220
```

- Objects are lists of key:value pairs that are useful for storing lots of information.

- You can have an array of objects.

#### undefined
- This is an object or piece of data that has not been defined

- Not the same as trying to call a variable that has yet been declared or defined. That is an error.
  
- You don't want nor should you nor should you want to set a variable to this value.

Example:
```javascript
let butt;
alert(butt);
//OUTPUT: undefined.
```

#### null
- Never assumed by default
- Can be used to *reset/clear* a variable.
- A variable that has been *reset* in this way doesn't throw an **Uncaught ReferenceError.
- Can also be used to purposefully display in your code that you want a variable to disappear.
- Can be used in conditionals to ensure date is missing.
Example:
```javascript
let ball = "red";
ball = null;
alert(ball);
//OUTPUT: null
```

#### NaN
- Technically of type number.
- Result of invalid calculation. ex `x = 5 * 'r*` is **NaN**
- Using **NaN** in a calculation always yields another **NaN**

Example
```javascript
let x = 9;
x = x + "six";
//OUTPUT: NaN 
//Integer plus string cannot be evaluated, so it returns NaN

let y = 5;
y= y + x;
//OUTPUT: NaN
//Doing any calculation with NaN yields NaN

let z = 5 * "five";
typeof z;
//OUTPUT: NaN
//Evidence that NaN is of type number.
```



### let
**let** is a keyword for creation of a variable. When using **let** you can think of JS like a vaguely typed language. 
- **let** is only used during the creation of the variable.
- **let** lets the reader and the compiler know that the variable you are creating is allowed to be changed later.


#### Example
```javascript
let x = 5;
let y = 6;
let z = x + y;

//notice we don't use let after the variable has been assigned.
z = z + 1 
console.log(z);
//OUTPUT : 12
```

### const
**const** is a keyword for the creation of a variable you do not want to change later.

- variables created with **const** let both the reader and compile know that this variable is not to be changed.
- attempting to change a **const** will throw an error.
- if you want to change a **const** you have to reassign it somewhere else.

#### Example
```javascript
const x = 125;
const y = 125;
const z = x + y;
z = z + 1;  //!!!This throws an error!
//If you want to alter z's value it must be re-assigned.
let z_var = z;
z_var = z + 1;
console.log(z_var, z);
//OUTPUT: 251, 250
```


### Multiple Variable Assignment

- You can declare multiple variables at a time. eg.<br>
`let a, b, c`

- You can also assign multiple variables at the same time as long as they are the same keyword *let* or *const* eg. <br>`const a = 5, b = 'string', c = 3.3 ` 



### Shadowed Variables
- Javascript allows for something known as *Shadowed Variables*

- **Definition:** *Variable shadowing occurs when a variable of an inner scope is defined with the same name as a variable in the outer scope. ... In the inner scope, both variables' scope overlap.*

#### Example
```javascript
let userName = "Justin";

function greet(name) {
    let username = name
    alert(`Greetings ${username}!`);
}
userName = "Gary";
greet('Justin');

//Output: Hello Justin
```

- Normally, having a declaration using the keyword *let* on the same variable twice would throw an error, but in this case it's different.

- The variable is declared in the *global* scope first, and then declared again in the function scope.

- Javascript creates a new variable on a different scope - this variables does not overwrite or remove the global variable by the way - both co-exist.

- If we had written the script like the following:

#### Example
```javascript
let username = "bob";
function greet(name) {
    username = name
}
//Now, being javascript doesn't seen username existing locally, it falls back to the global variable.
```

- Only if no such local variable existed, JavaScript would fall back to the global variable.

---

## Functions

### Scope
- Variables called within a function cannot call variables in the global scope unless they've been declared before them.

#### Example
**BAD**
```javascript
//Notice @aRandomString is declared AFTER the function was declared, but the function attempts to use it. This could throw an error. 
function aRandomFunction() {
    let anotherRandomString = "I'd've been married a long time ago."
    alert(`${aRandomString} ${anotherRandomString}`) 
}
let aRandomString = "If it hadn't been for Cotton-eyed Joe..."
```
**GOOD/BETTTER/GREAT**
```javascript
let aBetterString = "and I cannot lie!";

function aBetterFunction() {
    let anEvenBetterString = "I like big butts";
    alert(`$anEvenBetterString} ${aBetterString}`)
}
```

- However, you CAN call a function before its been declared.
  
- Much like many other programming languages, variables declared withing a function are in block scope, and cannot be called/manipulated outside.

#### Example
```javascript
function declareAVariable(){
    let string = "Example";
}

alert(string);

//Uncaught ReferenceError: string is not defined
```

###  Return 

- Return works much like you would expect in other programming languages.
- Of course you can have only 1 return at the end of any given branch.
- Being return immediately ends the execution of a function, you can of course end a blank `return`
#### Example
```javascript
function addNumbersForNoReason() {
    let a=5, b=1, c=3;
    return;
}
//This function would assign some variabes (for no reason here) and then end the function.
```

---

## Event Listeners

- Javascript will execute any function it comes across if it is called to be executed. <br> ie: `add()`. 
- However, sometimes we want to attach a function to something on a website (like a button). That is where an event listener comes into play.
- One of the most basic event listeners is on mouse click. We want javascript to wait until an element on the webpage is clicked, then execute the function. 

#### Example

```javascript
//In this example you can pretend there is a button on the web page with HTML id tag 'button'
//There is also an HTML <span> with id 'a-span'
const someButton = document.getElementById('button');
function changeElement() {
    document.getElementById('a-span').textContent = 'I've been clicked!'
}

//Notice that within the parameters of addEventListener() you name the function you
//want to assign to your button in this case. You do not add paranthesis because you are telling
//the browser to wait until the event happens before the function is executed.
somebutton.addEventListener('click', changeElement)
//This script would wait until @somebutton is clicked and then change the text of the span element to "I've been clicked!"
```

- There are other event listeners besides mouse clicks, which will be covered later in Max's lecture.

---
## Cool Shorthand Stuff

- Parse Int Shorthand.
```javascript
currentResult = currentResult + parseInt(userInput.value);
//Is the same as:
currentResult = currentResult + +userInput.value;
```
---

- Assignment Operation Shorthand
- Works for addition, subtraction, division, multiplication, incrementing, decrementing.

```javascript
let aNumber = 5;

//addition
aNumber += 5;
//OUTPUT: 10

//subtraction
aNumber -= 5;
//OUTPUT: 5

//Multiplication
aNumber *= 5;
//OUTPUT: 25

//Division
aNumber /= 5;
//OUTPUT: 5

//Increment
aNumber++
//OUTPUT: 6

//Decrement
aNumber--
//OUTPUT: 5
```

- Position of the **++** or **--** can affect how the variable is returned.
- If the increment/decrement comes after the variable, the variable is returned, and **THEN** incremented/decremented. 
- If the increment/decrement comes before the variable, the variable is returned and **THEN** incremented/decremented.

```javascript
let anumber = 5;
alert(anumber++);
//OUTPUT: 5
//anumber value is actually 6

let anumber2 = 5;
alert(++anumber2);
//OUTPUT: 6
//anumber2 value is actually 6
```



