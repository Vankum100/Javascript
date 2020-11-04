'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//_______ VAR , LET , CONST  _____________________________________________///

// Use var at the top level
// Default to using let
// Use const when dont want reassignment of variable

// remember const receive more values 
// if its an array

var months = ['January', 'february'];

months.push('March');

//_______   ARROW FUNCTIONS RULES  _________________________________________///

// when no params then 
// () => return statement
// para => return statement
// (para1,para2) => return statement

var names = ['Taylor', 'Ivan', 'John', 'Adam', 'Jane'];

names = names.map(function (name, index) {
    return name + ' is the element at position ' + index;
});

console.log(names);

//________ DEFAULT VALUES  __________________________________________________///

// the default values can be both function calls as well as primitive values

// here the default discount is a call to 
// defaultDiscountRate() function

function defaultDiscountRate() {
    return .10;
}

function applyDiscount(cost) {
    var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDiscountRate();

    return cost - cost * discount;
}

// passing only cost param
// the default 10% is used for discount param 
console.log(applyDiscount(100)); // 90


//________ REST and SPREAD __________________________________________________///

// REST used for getting the 'rest' of the arguments
// cases where the list of arguments is not known in advance
// REST - translates a list of arguments of a function into an array
function sum() {
    for (var _len = arguments.length, restOfNumbers = Array(_len), _key = 0; _key < _len; _key++) {
        restOfNumbers[_key] = arguments[_key];
    }

    return restOfNumbers.reduce(function (prev, current) {
        return prev + current;
    });
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// SPREAD - used for splitting an array into the set of arguments into a function

function sumSpreaded(x, y, z, t) {
    return x + y + z + t;
}

var nums = [1, 2, 3, 4];

console.log(sumSpreaded.apply(undefined, nums));

//________ TEMPLATE STRINGS __________________________________________________///
var name = 'John';

var template = '\n<div class="Alert">\n    <p>' + name + '</p>\n</div>\n';

console.log(template);

//________ OBJECTS ENHANCEMENT  __________________________________________________///

// Oject shorthand
// instead of return { name: 'name'}
// use return {name}
// getPerson returns a person Object
function getPerson() {
    var name = 'John';
    var age = 25;

    return { name: name,
        age: age,

        greet: function greet() {
            return 'Hello, ' + this.name;
        }
    };
}

console.log(getPerson().name); // John
console.log(getPerson().greet()); // Hello,John

// Object destruction 

var data = {
    name: 'Karen',
    age: 32,
    results: ['foo', 'bar'],
    count: 30
};

var results = data.results,
    count = data.count;


console.log(results, count); // ['foo', 'bar'] , 30 

// aslo as function params

function greet(_ref) {
    var name = _ref.name,
        age = _ref.age;

    console.log('Hello, ' + name + '. You are ' + age + '.');
}

greet({
    name: 'Luke',
    age: 24,
    otherInfo: 'We dont need you for destructing'
});

//________ CLASSES   __________________________________________________///

// ---- faking class behaviour in  ES5 

// // create a constructor

function User(username, email) {
    this.username = username;
    this.email = email;
}

// // Assign methods to the prototype, so that all instances share

User.prototype.changeEmail = function (newEmail) {
    this.email = newEmail;
};

var user = new User('Ivan', 'example@mail.ru');

user.changeEmail('foo@yandex.ru');

// console.log(user);


/// IN ES6 USE CLASSES INSTEAD

var UserClass = function () {
    function UserClass(username, email) {
        _classCallCheck(this, UserClass);

        this.username = username;
        this.email = email;
    }

    // Behind the scenes, this is added to the User prototype

    _createClass(UserClass, [{
        key: 'changeEmail',
        value: function changeEmail(newEmail) {
            this.email = newEmail;
        }
        // get and set accessors
        // could be used for computed properties

    }, {
        key: 'foo',
        get: function get() {
            return 'foo';
        }

        // statics 

    }], [{
        key: 'register',
        value: function register(username, email) {
            return new UserClass(username, email);
        }
    }]);

    return UserClass;
}();

var employee = new UserClass('Simon', 'admin@gmail.com');

employee.changeEmail('support@gmail.com');

console.log(employee);

var staticUser = UserClass.register('John Doe', 'doe@mail.ru');

console.log(staticUser);

//________ PROMISES 101 __________________________________________________///

// .then() only works when resolve() is explicitly called

var timer = function timer(waitTime) {
    return new Promise(function (resolve, reject) {
        console.log('Init Promise');
        setTimeout(function () {
            console.log('Timeout done.');
            resolve();
        }, waitTime);
    });
};

timer.then(function () {
    console.log('Proceed now that timer has concluded.');
});