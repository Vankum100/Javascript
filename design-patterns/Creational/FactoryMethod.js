//    __________________ IMPORTANT POINT _____________________///

/*
The Simple factory pattern  describes a class that has one creation method with a large conditional that based on method parameters chooses which product class to instantiate and then return.

People usually confuse simple factories with a general factories or with one of the creational design patterns. In most cases, a simple factory is an intermediate step of introducing Factory Method or Abstract Factory patterns.
*/
// Here’s an example of simple factory:

class UserFactory{

	static create(type){
		switch (type) {
			case 'user': return new User();
			case 'customer': return new Customer();
			case 'admin': return new Admin();	
			default:
				throw 'Wrong User type passed';			
		}
	}
}

/*
    The Factory Method  is a creational design pattern that provides an interface for creating objects but allows subclasses to alter the type of an object that will be created

*/

// ES6 Class syntax

// In True OOP this should be an abstract class

class BallFactory {
	constructor() {
		this.createBall = function(type) {
			let ball;
			if (type === 'football' || type === 'soccer') ball = new Football();
			else if (type === 'basketball') ball = new Basketball();
			ball.roll = function() {
				return `The ${this._type} is rolling.`;
			};

			return ball;
		};
	}
}

class Football {
	constructor() {
		this._type = 'football';
		this.kick = function() {
			return 'You kicked the football.';
		};
	}
}

class Basketball {
	constructor() {
		this._type = 'basketball';
		this.bounce = function() {
			return 'You bounced the basketball.';
		};
	}
}

// creating objects
/*
const factory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');

console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketball.roll()); // The basketball is rolling.
console.log(myFootball.kick()); // You kicked the football.
console.log(myBasketball.bounce()); // You bounced the basketball.
*/

export default {
	BallFactory,
};
