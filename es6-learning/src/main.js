//_______ VAR , LET , CONST  _____________________________________________///

// Use var at the top level
// Default to using let
// Use const when dont want reassignment of variable

// remember const receive more values 
// if its an array

const months = ['January', 'february'];

months.push('March');

//_______   ARROW FUNCTIONS RULES  _________________________________________///

// when no params then 
// () => return statement
// para => return statement
// (para1,para2) => return statement

let names = ['Taylor','Ivan', 'John', 'Adam', 'Jane'];

names = names.map( (name, index) => name + ' is the element at position ' + index);

console.log(names);



//________ DEFAULT VALUES  __________________________________________________///

// the default values can be both function calls as well as primitive values

// here the default discount is a call to 
// defaultDiscountRate() function

function defaultDiscountRate(){
    return .10;
}

function applyDiscount(cost, discount = defaultDiscountRate()){
    return cost -( cost * discount);
}

// passing only cost param
// the default 10% is used for discount param 
console.log(applyDiscount(100)); // 90


//________ REST and SPREAD __________________________________________________///

// REST used for getting the 'rest' of the arguments
// cases where the list of arguments is not known in advance
// REST - translates a list of arguments of a function into an array
function sum(...restOfNumbers){
    return restOfNumbers.reduce((prev, current) => prev + current) ;
}

console.log(sum(1,2,3)); // 6
console.log(sum(1,2,3,4,5)); // 15

// SPREAD - used for splitting an array into the set of arguments into a function

function sumSpreaded(x,y,z,t){
    return x + y + z + t;
}

let nums = [1,2,3,4];

console.log(sumSpreaded(...nums));

//________ TEMPLATE STRINGS __________________________________________________///
let name = 'John';

let template = `
<div class="Alert">
    <p>${name}</p>
</div>
`;

console.log(template);

//________ OBJECTS ENHANCEMENT  __________________________________________________///

// Oject shorthand
// instead of return { name: 'name'}
// use return {name}
// getPerson returns a person Object
function getPerson(){
    let name = 'John';
    let age = 25;

    return {name,
           age,

        greet() {
            return `Hello, ${this.name}`;
        }
    };
}

console.log(getPerson().name) // John
console.log(getPerson().greet()); // Hello,John

// Object destruction 

let data = {
    name: 'Karen',
    age: 32,
    results: ['foo', 'bar'],
    count: 30
};

let {results, count} = data;

console.log(results,count); // ['foo', 'bar'] , 30 

// aslo as function params

function greet({name, age}){
    console.log(`Hello, ${name}. You are ${age}.`);
}

greet(
    {
        name: 'Luke',
        age: 24,
        otherInfo: 'We dont need you for destructing'
    });


//________ CLASSES   __________________________________________________///

// ---- faking class behaviour in  ES5 

// // create a constructor

function User(username,email)
{
    this.username = username;
    this.email = email;
}

// // Assign methods to the prototype, so that all instances share

User.prototype.changeEmail = function (newEmail){
    this.email = newEmail;
}

var user = new User('Ivan', 'example@mail.ru');

user.changeEmail('foo@yandex.ru');

// console.log(user);


/// IN ES6 USE CLASSES INSTEAD

class UserClass {
    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    // Behind the scenes, this is added to the User prototype

    changeEmail(newEmail){
        this.email = newEmail;
    }
    // get and set accessors
    // could be used for computed properties
     get foo(){
         return 'foo';
      }

      // statics 
      static register(username, email){
          return new UserClass(username, email);
      }

}

let employee = new UserClass('Simon', 'admin@gmail.com');

employee.changeEmail('support@gmail.com');

console.log(employee);

let staticUser = UserClass.register('John Doe', 'doe@mail.ru');

console.log(staticUser);



//________ ES6 MODULES and WEBPACK BUNDLER   __________________________________________________///

import TaskCollection from './TaskCollection';


new TaskCollection([
    'Go to the store',
    'Finish screencast',
    'Eact cake']
).dump();

