//map

//map,set 자료구조 등장

//map,set 의 목적 : 데이터의 구성, 검색, 사용을 효율적으로 처리 > 기존의 객체 또는 배열보다

//1 map

//key / value
//key 에 어떤 데이터 타입도 들어감
// map 은 키가 정렬된 순서로 저장 
//기능
//검색, 삭제 , 제거 , 여부

const myMap = new Map();
myMap.set("name","john");
const test = myMap.get("name");
console.log(test);

//반복 keys,values,entries

