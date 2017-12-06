不使用闭包，非预期
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6]();  //10



使用闭包，保护私有变量，块级作用域，预期结果
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function(k){
		return function(){
			console.log(k);
		};
	}(i);
}
a[6]();    //6
