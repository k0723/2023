// 무슨 제어권 ?
// 1. 호출 지점에 대한 제어권을 갖는다
// setInterval() : 반복해서 매개변수로 받은 콜백함수의 로직을 수행
var count = 0;
// var a = setInterval(function(){
//     console.log(count);
//     if(++count>4) clearInterval(a);
// }, 
// 300);

var a = function() {
        console.log(count);
        if(++count>4) clearInterval(timer);
    };
//a(); 
var timer = setInterval(a,300);