//ES5
const products = [
    { name: "banana", type: "fruit" },
    { name: "carrot", type: "채소" },
    { name: "apple", type: "fruit" },
    { name: "겨란", type: "유제품" },
    { name: "yogurt", type: "유제품" },
];
const fruit = [];
for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        fruit.push(products[i]);
    };
};
console.log(fruit);


//ES6
const 유제품 = products.filter(element => {
    return element.type === "유제품";
});
console.log(유제품);

//실제로는?
const comments = [
    { id: 1, author: '빈산', products: '블라블라' },
    { id: 2, author: '신', products: '겨란이 왔어요.' },
    { id: 3, author: '빈산', products: '블라블라' },
    { id: 4, author: '신', products: '이북에서 왔어요.' },
];

const 신 = comments.filter(comment => comment.author === '신');

//실습1
const numbers = [1, 3, 5, 6, 10, 54, 25, 330, 220, 5];
//filter를 사용해서 10~100사이의 숫자만 뽑아 그 결과를 보여주세요.
const result1 = numbers.filter(number => number > 10 && number < 100);
console.log(result1);

const result2 = numbers.filter(number => number > 10 && number < 100 ? true : false);
console.log(result2);

//실습2
//filter를 사용해서 reject 함수를 만들어주세요
//reject 함수는 filter와 정반대
function reject(arr, callback) {
    return arr.filter(element => !callback(element));
}

const 영찬 = reject(numbers, numbers => numbers > 10);

console.log(영찬);

