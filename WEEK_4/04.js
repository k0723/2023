// 무슨 제어권 ?
// 인자에 대한 제어권을 갖는다.
// map 함수입니다.

//index : 사람이 이해할 수 있는 변수명
//currentValue
var newArr = [10,20,30].map(function (index, currentValue) {
    console.log(index,currentValue);
    return currentValue + 5;
});


console.log(newArr);