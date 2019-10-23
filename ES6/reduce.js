//ES5
const numbers = [10, 20, 30];
let sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

//ES6
sum = numbers.reduce((acc, number) => {
    return acc + number; //0 + 10 => 10 + 20 => 30 + 30 => 60
}, 0);
//0, 10, 30, 60
console.log(sum);

let multiply = numbers.reduce((acc, number) => acc * number, 1);
console.log(multiply);

const strings = ['apple', 'is', 'good'];
const some = strings.reduce((acc, str) => acc + str, '');
console.log(some);

//map 함수 구현하기
let dNumbers = numbers.map(e => e * 2);
dNumbers = numbers.reduce((acc, number) => {
    acc.push(number * 2);
    return acc
}, []);
console.log(dNumbers);

//실제로?
/* 올바르게 닫힌 괄호 올바르게 닫히지 않는 괄호 */
function isGoodParens(string) {
    return !string.split("").reduce((acc, char) => {
        if (acc < 0) {
            return acc;
        } else if (char === '(') {
            ++acc;
        } else {
            --acc;
        }
        return acc;
    }, 0);
};
/* !0 ? true;
'', undefined, null, 0 => !! !variable */

//실습
const 참석자 = [
    { id: 1, type: 'sitting' },
    { id: 2, type: 'sitting' },
    { id: 3, type: 'standing' },
    { id: 4, type: 'sitting' },
    { id: 5, type: 'standing' },
];

//reduce를 사용해서 서있는 사람 앉아있는 사람의 수를 출력;
function isStanding(string) {
    return string.reduce((acc, str) => {
        if (str.type === 'standing') {
            acc += 1;
        }
        return acc;
    }, 0);
}
const result2 = isStanding(참석자);
console.log(result2);

//실습2
//unique를 만들어봅시다.
const samples = [10, 20, 30, 20, 40, 10, 50];
function unique(arr) {
    return arr.reduce((acc, element) => {
        if (!acc.find(el => el === element)) {
            acc.push(element);
        }
        return acc;
    }, []);
};
const result3 = unique(samples);
console.log(result3);

