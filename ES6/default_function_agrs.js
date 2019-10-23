//ES5
function makeRequset(url, method) {
    if (!method) {
        method = "GET";
    }
    doSomething(url, method);
}

//ES6
function makeRequset2(url, method = "GET") {
    console.log(url, method);
}
makeRequset2("Hello", "POST");
makeRequset2("Hello");

//예시
const sum = (a = 0, b = 0) => a + b;
console.log(sum());
