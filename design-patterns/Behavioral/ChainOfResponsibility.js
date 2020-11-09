/*
	This is a behavioural design pattern that provides a chain of loosely coupled objects. Each of these objects can choose to act on or handle the request of the client.
	A good example of the chain of responsibility pattern is the event bubbling in DOM in which an event propagates through a series of nested DOM elements, one of which may have an "eventlistener" attached to listen and act on the event.
*/

class CumulativeSum {
	constructor(intialValue = 0) {
		this.sum = intialValue;
	}

	add(value) {
		this.sum += value;
		return this;
	}
}


// usage
const sum1 = new CumulativeSum();
console.log(sum1.add(10).add(2).add(50).sum); // 62


const sum2 = new CumulativeSum(10);
console.log(sum2.add(10).add(20).add(5).sum); // 45


export default CumulativeSum;