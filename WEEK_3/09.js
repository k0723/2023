var obj = {
	outer: function() {
		console.log(this); // (1) obj
		var innerFunc = () => {
			console.log(this); // (2) obj
		};
		innerFunc();
	}
}

obj.outer();