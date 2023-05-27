var func = function (a, b, c, d) {
	console.log(this, a, b, c, d);
};
var bindFunc = func.bind({ x:1 }, 4, 5);

// func와 bindFunc의 name 프로퍼티의 차이를 살펴보세요!
console.log(func.name); // func
console.log(bindFunc.name); // bound func