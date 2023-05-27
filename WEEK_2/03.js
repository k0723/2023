//일급 객체로서의 함수
// 변수에 함수를 할당 가능

const sayhello = function () {
    console.log("Hello!");
}

//함수를 인자로 다른 함수에 전달할 수가 있다.
//  콜백함수 매개변수로 쓰이는 함수
// 고차함수 함수를 인자로 받거나 return 하는 함수
function call (func) {
    //매개변수로 받은 변수가 사실 함수다.
    func();
}
call(sayhello)