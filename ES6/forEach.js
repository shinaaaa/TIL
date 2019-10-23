const colors = ['red', 'green', 'blue'];

//ES5

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@');

//ES6

colors.forEach(element => console.log(element));

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@');

//실습
try {

} catch (error) {

}
function forEach(arr, callback) {
    if (!Array.isArray(arr)) throw new Error('배열을 넣어 주세요.');
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
forEach(colors, (e) => console.log(e));

//실습2
const images = [
    { h: 10, w: 20 },
    { h: 5, w: 5 },
    { h: 20, w: 30 },
];
const area = [];
images.forEach(element => {
    area.push(element.h * element.w);
})
console.log('area = ', area);