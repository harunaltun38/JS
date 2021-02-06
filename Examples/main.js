console.log("let's start");

//______Variables
const name = "harun";
let durschnitt = 33.3;
let alter = 12;

console.log("Person heisst" + name + "und ist soviel alt" + alter);
console.log(`Person heisst ${name} und ist soviel alt ${alter}`);


//_____String methods & properties
const s = 'Hello World';
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split('');

//______ARRAYS - Store multiple values in a variable

const personen = ["harun", "fatma", "beyza"];
personen[3] = "elon";
personen.push("Ali");
console.log(personen);

console.log(Array.isArray(personen));
console.log(personen.indexOf("fatma"));

////
const numbers = [1,2,3,4,5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruits);

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = 'blueberries';

// Add value using push()
fruits.push('strawberries');

// Add to beginning
fruits.unshift('mangos');

// Remove last value
fruits.pop();

// // Check if array
console.log(Array.isArray(fruits));

// // Get index
console.log(fruits.indexOf('oranges'));


//_______ARRAY of Objects
const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isComplete: false
    },
    {
      id: 2,
      text: 'Dinner with wife',
      isComplete: false
    },
    {
      id: 3,
      text: 'Meeting with boss',
      isComplete: true
    }
  ];
  
  // Get specific object value
  console.log(todos[1].text);
  
  // Format as JSON
  console.log(JSON.stringify(todos));


  // LOOPS

// For
for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
  }
  
  // While
  let i = 0
  while(i <= 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
  }
  
  // Loop Through Arrays
  // For Loop
  for(let i = 0; i < todos.length; i++){
    console.log(` Todo ${i + 1}: ${todos[i].text}`);
  }
  
  // For...of Loop
  for(let todo of todos) {
    console.log(todo.text);
  }
  
  
  // HIGH ORDER ARRAY METHODS (show prototype)
  
  // forEach() - Loops through array
  todos.forEach(function(todo, i, myTodos) {
    console.log(`${i + 1}: ${todo.text}`);
    console.log(myTodos);
  });
  
  // map() - Loop through and create new array
  const todoTextArray = todos.map(function(todo) {
    return todo.text;
  });
  
  console.log(todoTextArray);
  
  // filter() - Returns array based on condition
  const todo1 = todos.filter(function(todo) {
    // Return only todos where id is 1
    return todo.id === 1; 
  });
  
  
  // CONDITIONALS
  
  // Simple If/Else Statement
  const x = 30;
  
  if(x === 10) {
    console.log('x is 10');
  } else if(x > 10) {
    console.log('x is greater than 10');
  } else {
    console.log('x is less than 10')
  }
  
  // Switch
  color = 'blue';
  
  switch(color) {
    case 'red':
      console.log('color is red');
    case 'blue':
      console.log('color is blue');
    default:  
      console.log('color is not red or blue')
  }
  
  // Ternary operator / Shorthand if
  const z = color === 'red' ? 10 : 20;
  
  
  
  // FUNCTIONS
  function greet(greeting = 'Hello', name) {
    if(!name) {
      // console.log(greeting);
      return greeting;
    } else {
      // console.log(`${greeting} ${name}`);
      return `${greeting} ${name}`;
    }
  }
  
  
  // ARROW FUNCTIONS
  const gruß = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
  console.log(gruß('Hi'));
  


//_______USE OBJECT LITERALS

const Mensch = {
  firstName: "harun",
  lastName: "altun",
  alter: 28,
  hobbies: ["wing chun", "muay thai", "Merve"],
  addresse: {
    strasse: "freiherr",
    stadt: "rimbach",
    nummer: 2,
  },
};

Mensch.email= 'saban@gmx.de';    // Mensch objekt bekommt zusätzlich variable. Const steht nur für type safety
                                 // kein anderes Objekt auf diese Variable und der Typ der Variable kann nivht geändert werden (type safety)
console.log(Mensch);

console.log(Mensch.hobbies[2]);
console.log(Mensch.addresse.strasse);

const {  firstName,  lastName,  addresse: { stadt }, } = Mensch; //tu aus dem object Mensch die attribute holen und in variablen zuweisen
console.log(firstName);



//_________________________OOP


//___Constructor Function

function Person(firstName, lastName, dob) {
    // Set object properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // Set to actual date object using Date constructor
    // this.getBirthYear = function(){
    //   return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //   return `${this.firstName} ${this.lastName}`
    // }
  }
  
  // Get Birth Year
  Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
  }
  
  // Get Full Name
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }
  
  
  // Instantiate an object from the class
  const person1 = new Person('John', 'Doe', '7-8-80');
  const person2 = new Person('Steve', 'Smith', '8-2-90');
  
  console.log(person2);
  
  // console.log(person1.getBirthYear());
  // console.log(person1.getFullName());
  
  
  
  // Built in constructors
  const name = new String('Kevin');
  console.log(typeof name); // Shows 'Object'
  const num = new Number(5);
  console.log(typeof num); // Shows 'Object'
  
  
  //_________________________________ES6 CLASSES

  class Person {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
    }
  
    // Get Birth Year
    getBirthYear() {
      return this.dob.getFullYear();
    }
  
    // Get Full Name
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  
  const person1 = new Person('John', 'Doe', '7-8-80');
  console.log(person1.getBirthYear());


  //__________________________________ELEMENT SELECTORS


// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


//____________________________________MANIPULATING THE DOM

const ul = document.querySelector('.items');
items.forEach((item) => console.log(item));         //iterate over list items

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'harun';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';


//____________________________________EVENTS

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});


//______________________________________USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

//_____________________________________Listen for form Submit

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {      //Form Validation
    // alert('Please enter all fields');
    msg.classList.add('error');                   // Add CSS to msg
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}