//이런 패턴은 어떨까요?
var copyObject = function (target) {
	var result = {};

	// for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에 접근할 수 있습니다.
	// 하드코딩을 하지 않아도 괜찮아요.
	// 이 copyObject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면
	// 되겠죠!?
	for (var prop in target) {
		result[prop] = target[prop];
	}
	return result;
}

var user = {
	name: 'wonjang',
	urls: {
		portfolio: 'http://github.com/abc',
		blog: 'http://blog.com',
		facebook: 'http://facebook.com/abc',
	}
};

// 1차 copy
var user2 = copyObject(user);

// 2차 copy -> 이렇게까지 해줘야만 해요..!!
user2.urls = copyObject(user.urls);

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio);

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);