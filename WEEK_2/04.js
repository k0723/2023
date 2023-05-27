//일급객체로써의 함수

// const person = {
//     name : "john",
//     age : 31,
//     isMarried: true,
//     sayhello: function () {
//         console.log(`hello my name is ${this.name}`);
//     }
// }

// person.sayhello();

const person = {
    name : "john",
    age : 31,
    isMarried: true,
    sayhello: () => {
        console.log(`hello my name is ${this.name}`);
    }
}

person.sayhello();