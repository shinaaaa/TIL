//ES5
const numbers = [1, 2, 3];
const dNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    dNumbers.push(numbers[i] * 2);
}
console.log(dNumbers);

//ES6
const tNumbers = numbers.map(number => number * 3);
console.log(tNumbers);

//실습1
const images = [
    { h: 10, w: 20 },
    { h: 5, w: 5 },
    { h: 20, w: 30 },
];
const heights = images.map(images => images.h);
console.log(heights);

//실습2 plunk
function pluck(arr, key) {
    const result = arr.map(arr => arr[key]);
    return result
}

const result = pluck(images, 'w');
console.log(result);

/* const result = pluck(images, 'h');
console.log(result); */
