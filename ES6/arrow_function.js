//ES5

function add(a, b) {
    return a + b;
}

//ES6

const multiply = (a, b) => {
    return a * b;
}

const mul = (a, b) => a * b;

const square = a => a * a;
const logging = () => console.log('logging...');

const obj = {
    name: 'shin',
    sayHello: function () {
        console.log('hello');
    },
    sayBye() {
        console.log('bye');
    }
}
obj.name;
obj.sayHello();
obj.sayBye();