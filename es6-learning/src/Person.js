
// Babel Helps us `output` this `src` es2015 code in vanilla js 
// transformations are only possible with help of
// babel-preset-es2015 package
// set up the presets in `.babelrc` file


class Person {
    constructor(name){
        this.name = name;
    }

    greet() {
        return this.name + ' says hello.'; 
    }
}

console.log(new Person('jeffrey').greet());

