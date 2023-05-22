let person = {
    name : "test",
    age : 30,
    gender : "male"
};

function Person ( name, age, gender)
{
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("대머리",30,"female")



let keys = Object.keys(person)
console.log("keys =>",keys)

let values = Object.values(person)
console.log("values =>", values)

let entries = Object.entries(person)
console.log("entries =>", entries)

let newPerson = {};
Object.assign(newPerson, person, {gender:"female"});
console.log("newPerson =>", newPerson)

let person2 = new Person("머리", 30 , "male")