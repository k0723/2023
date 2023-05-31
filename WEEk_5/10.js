// 생성자 함수
function Person(name, age) {
    this.name = name; //public
    let _age = age; //private
  
    // 인스턴스 메서드
    // 따라서, Person 객체가 생성될 때 마다 중복 생성됨
    // : 해결방법 -> prototype
    this.sayHi = function () {
      console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
    };
  }
  
  const me = new Person("Choi", 33);
  me.sayHi(); // Hi!, My name is Choi. I am 33.
  console.log(me.name); // Choi
  console.log(me._age); // undefined
  
  const you = new Person("Lee", 30);
  you.sayHi(); // Hi! My name is Lee. I am 30.
  console.log(you.name); // Lee
  console.log(you.age); // undefined