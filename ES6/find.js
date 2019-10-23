//ES5
const users = [
    { name: 'song' },
    { name: 'Tony' },
    { name: 'Hulk' },
    { name: 'Thor' },
];

let user = null;
for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'Tony') {
        user = users[i];
        break;
    }
}
console.log(user);
//ES6
user = users.find(user => user.name === 'Tony');

console.log(user);

//실제로는?
const data = [
    { id: 1, name: 'Tony' },
    { id: 2, name: 'Hulk' },
    { id: 3, name: 'Thor' },
    { id: 4, name: 'Peper' },
]; //DB 조회 값
const whatWeWant = data.find(e => e.id === 3);

console.log(whatWeWant);


//실습
const products = [
    { name: "banana", type: "fruit" },
    { name: "carrot", type: "채소" },
    { name: "apple", type: "fruit" },
    { name: "겨란", type: "유제품" },
    { name: "yogurt", type: "유제품" },
];
//겨란인 제품 찾기
const egg = products.find(e => e.name === '겨란');
console.log(egg);


