//set


// 값 추가, 검색 ,삭제 ,모든값제거 존재 여부 확인

const mySet = new Set();
mySet.add('value1');
mySet.add('value2');

// console.log(mySet.size);
// console.log(mySet.has('value1'));

for(const value of mySet.values())
{
    console.log(value);
}