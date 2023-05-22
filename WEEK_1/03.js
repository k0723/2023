let str = "Hello World!"
// console.log(str);
// console.log(typeof str);

console.log(str.length)

//문자열 결합

let str1 = "Hello"
let str2 = " World!"
let result = str1.concat(str2)
console.log(result)

// 문자여 자르기
let str3 = "Hello, World!"
console.log(str3.substring(7,5));
console.log(str3.slice(7,12));

// 문자열 검색 
let str4 = "Hello, World!"
console.log(str.search("World"));

// 문자열 대체
let str5 = "Hello, World!"
console.log(str.replace("World","javaScript"));

// 문자열 분할 
let str6 = "apple, banana, orange"
console.log(str6.split(","));