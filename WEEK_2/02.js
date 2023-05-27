// 단축 속성명 
// const name = "abc";
// const newAge = "30";


//단축 속성명을 사용한 객체이다.
// const obj = {
//     name ,
//     age : newAge
// }

//전개 구문

// let arr = [1,2,3]
// console.log(arr);

// let newArr = [...arr, 4];
// console.log(newArr)

//객체

let user = {
    name : 'nbc',
    age : 30
};

let user2 = {...user}

console.log(user);
console.log(user2);

//나머지 매개변수
function example(a,b,c, ...args) {
    console.log(a,b,c);
    console.log(args);
}
example(1,2,3,4,5,6,7);

//템플릿 리터링
const testValue = "hi"
console.log(`hello world ${testValue}`);
//일급객체 란 ? 
//다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 가리킨다.(위키백과)

