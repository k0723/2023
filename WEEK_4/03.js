// 무슨 제어권 ?
// 인자에 대한 제어권을 갖는다.
// map 함수입니다.

var newArr = [10,20,30].map(function (currentValue,index) {
    console.log(currentValue,index);
    return currentValue + 5;
});


console.log(newArr);