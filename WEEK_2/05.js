//객체 말고 배열의요소로 함수를 할당

const myArr = [
    function(a,b) {
        return a+b;
    },
    function(a,b) {
        return a-b;
    },
];

console.log(myArr[0](1,3));
console.log(myArr[1](10,3));

// 함수 리펙토링

function multiply(num) {
    return function (x) {
        return x*num;
    }
}
function add(x,y) {
    return x+y;
}
const multiplyTwo = multiply(2)
const multiplyThree = multiply(3)
console.log(multiplyTwo(3));
console.log(multiplyThree(3));
