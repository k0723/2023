var obj1 = {
	name: "obj1",
	func: function() {
		var self = this; //이 부분!
		return function () {
			console.log(self.name);
		};
	}
};


var obj2 = {
    name:"obj2",
    func :  function() {
		var self = this; //이 부분!
		return function () {
			console.log(self.name);
		};
	}
};



var obj3 = {
    name:"obj3",
};
// 단순히 함수만 전달한 것이기 때문에, obj1 객체와는 상관이 없어요.
// 메서드가 아닌 함수로서 호출한 것과 동일하죠.
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 1000);