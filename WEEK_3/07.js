var a = 1;
var outer = function() {
	var inner = function() {
		console.log(a); // 이 값은 뭐가 나올지 예상해보세요! 이유는 뭐죠? scope 관점에서!
		var a = 3;
	};
	inner();
	console.log(a); // 이 값은 또 뭐가 나올까요? 이유는요? scope 관점에서!
};
outer();
console.log(a); // 이 값은 뭐가 나올까요? 마찬가지로 이유도!