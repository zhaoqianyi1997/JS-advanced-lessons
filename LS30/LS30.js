var f = function (v) {
    return v + 1;
};
f(2);//3

//使用箭头函数，上述代码等效如下,只有一个参数和一条语句
var f = v => v + 1; //单参数可以不用（），单语句可以不用return关键字
//var f = (v) => {return v + 1;};
f(2);//3

//没有参数和有多个参数的情况下，需要使用小括号来表示参数，如果有多条语句则需要有大括号表示函数体
var f = () => 5;
var f = function () {
    return 5
};

var foo = (num1, num2) => {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
};
//foo(2,3);
//foo(3,2);
var foo = function (num1, num2) {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
};
//foo(2,3);
//foo(3,2);

var max = function (a, b) {
    return a > b ? a : b;
};


const full = ({ first, last }) => last + ' ' + first;
full({first:"Ming",last:"Li"});


function full({ first, last }) {
  return last + ' ' + first;
}
full({first:"Ming",last:"Li"});


var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;
        }
        function moveToY() {
            this.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);


var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;
        function moveToX() {
            that.x = x;
        }
        function moveToY() {
            that.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var moveToX = ()=>this.x=x;
        var moveToY = ()=>this.y=y;
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
function foo() {
    setTimeout(function(){
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 21
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    };
}
var f = foo.call({id: 1});
var t1 = f.call({id: 2})()(); 
var t2 = f().call({id: 3})(); 
var t3 = f()().call({id: 4}); 
//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上小括号
var getTempItem = itemId => ({ id: itemId, name: "Temp" });

var getTempItem = function (itemId) {
    return { id: itemId, name: "Temp" }
};



var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//本应为1+0+0，但此处为1+4+5

var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//1+0+0


var sum = function(a,b=4,c=5){
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//1+0+0

function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
    console.log(url);
    console.log(body);
    console.log(method);
    console.log(headers);
}

function test() {
    console.log(arguments);//console.log(test.arguments);
}
test("a","b","c");//


function f(...y){
    console.log(y);
}
f("a","b","c");//输出 ["a","b","c"]

function add(...values) {
    let sum = 0;
    for (var val of values) {
      sum += val;
    }
    return sum;
  }
  add(2, 5, 3) // 10

function f(x,...y){
    console.log(x,y);
}
f("a","b","c","d");//输出 "a",["b","c","d"]
f("a");//输出 "a",[]
f();//输出 undefined,[]

function f(x,...y){
    console.log(x,y);
}
f("a",...["b","c"]);
f("a");//输出 "a",[]
f();//输出 undefined,[]


function abc(...v){
    console.log(v)
}
o1 = {};
abc.call(o1,...[1,2,3]);

