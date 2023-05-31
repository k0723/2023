class Person {
    constructor (name,age)
    {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`${this.name}hello`);
    }

    printMyAge() {
        console.log(`age is ${this.name}`);
    }
}


const person1 = new Person("홍길동", "30");
const person2 = new Person("홍길순", "25");

person1.sayHello();
person2.sayHello();

person1.printMyAge();
person2.printMyAge();