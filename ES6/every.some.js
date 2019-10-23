//ES5
const computers = [
    { name: 'mac-air', ram: 8 },
    { name: 'gram', ram: 4 },
    { name: 'mac-pro', ram: 16 }
];

let everyComputerAvailable = true;
let someComputerAvailable = false;

for (var i = 0; computers.length; i++) {
    const computer = computers[i];
    if (computer.ram < 8) {
        everyComputerAvailable = false;
        break;
    }
    if (computer.ram > 8) {
        someComputerAvailable = true;
        break;
    }
}

//ES6
everyComputerAvailable = computers.every(computer => computer.ram > 8);
console.log(everyComputerAvailable);

someComputerAvailable = computers.some(computer => computer.ram < 8);
console.log(someComputerAvailable);
console.log('***********************************');
//실제로는?
const data = [
    { name: 'song', answer: 'you pork' },
    { name: 'bing', answer: '' },
    { name: 'san', answer: 'great!' },
];

const everUserAnswered = data.every(e => e.answer.length > 0);
console.log(everUserAnswered);
console.log('***********************************');

//실습1
const users = [
    { id: 1, submit: true },
    { id: 2, submit: true },
    { id: 3, submit: true },
    { id: 4, submit: true }
];
//모든 사람이 제출했나여?
const everUserSubmit = users.every(e => e.submit);
console.log(everUserSubmit);
//한명이라도 제출했나여?
const someUserSubmit = users.some(e => e.submit);
console.log(someUserSubmit);
console.log('***********************************');

//실습2
function some(arr, callback) {
    return !arr.every(e => !callback(e));
};
const result = some(users, e => e.submit);
console.log(result);
