//demo01
// var a=[1,2,3];
// var b=a;
// console.log(a,b);//[1,2,3],[1,2,3]
// b.pop();
// console.log(a,b);//[1,2],[1,2]
// b=[4,5,6];
// console.log(a,b);//[1,2],[1,2,3]

// function foo(x){
//     x.push(4);
//     x=[5,6,7];//创建新的数组
//     x.push(8);
//     console.log(a);//[1,2,3,4]
//     console.log(x);//[5,6,7,8]

// }
// var a=[1,2,3];
// foo(a);
// console.log(a);//[1,2,3,4]

// function foo(x) {
//     x.push(4);
//     console.log(x);//1234
//     x.length = 0;
//     x.push(5,6,7,8);//5678
//     console.log(x);
// }
// var a = [1,2,3];
// foo(a);
// console.log(a);//5678


//02
// var a=2,b=3;
// if(a>b){
//     console.log("a > b");
// }else{
//     console.log("a < b");//a<b
// }

// var a,b;//a,b都是局部变量
// var a=b;// a是局部变量b是全局变量
// function foo(){
// 	var a=b=3;
// }
// foo();
// console.log("b:",b);//b:3
// console.log("a:",a);//baocuo a是局部变量

// function foo(){
// 	var a,b=3;
// }
// foo();
// console.log("b:",b);//报错
// console.log("a:",a);//报错都是局部变量

//03
// {var a=111;}
// console.log(a);//没有块作用域，大括号外依然能访问到a

// for(var i = 0;i<5;i++){
//     console.log("in for ",i);
// }
// console.log("out of for ",i);//out of for 5

// if(true){
//     var a = 20;
// }
// console.log(a);//20

// if(false){
//     var b = 30;
// }
// console.log(b);//undefined  

// for(var i =0;i<5;i++){
//     console.log(i);
//     }
//    console.log(i);//5 没有块作用域

//04
// function aa(){
//     a1=123;
// }
// aa();
// console.log(a1);//a1

// function aa(){
//     "use strict"
//      a1=123;
// }
// aa();
// console.log(a1);//报错

//07
// "use strict"
// function isStrictMode() {
//     return this === undefined?false:true;
// }
// console.log(isStrictMode());

//08
// var j = 23;//case_111
// var j = "23";//case_222
//  var j = new String("23");//case_default
// // var j = new Number(23);//case_default  全等！空间不一样
// switch (j){
//     case 23:
//         console.log("case_111");
//         break;
//     case "23":
//         console.log("case_222");
//         break;
//     case new Number(23):
//         console.log("case_333");
//         break;
//     default:
//         console.log("case_default");
// }

//09
// var year=2018,
//     month=5,
//     date=20,
//     sum=0;
// switch(month-1){
//     case 11:
//         sum+=30;
//         case 10:
//         sum+=31;
//         case 9:
//         sum+=30;
//         case 8:
//         sum+=31;
//         case 7:
//         sum+=31;
//         case 6:
//         sum+=30;
//         case 5:
//         sum+=31;
//         case 4:
//         sum+=30;
//         case 3:
//         sum+=31;
//         case 2:
//         sum+=year%4==0&&year%100||year%400==0?29:28;
//         case 1:
//         sum+=31;

// }
// console.log(sum);

//10
//遍历数组
// var arr=[11,12,13,14,15,]
// for(var i in arr){
//     console.log(i,arr[i]);
// }

//遍历对象
// var obj={x:10,y:20,z:"ss"};
// for( var i in obj){
//     console.log(i,obj[i],typeof obj[i]);
// }//x 10 number````

// var obj1 = {x:1};
// var obj2 = Object.create(obj1);//继承obj1
// obj2.y = 2;
// obj2.z = 3;
// for(var k in obj2){
//     console.log(k,obj2[k]);//y 2   z 3  x 1
// }



//11
// var a = 34;
// if(a = 45){
//     console.log("是否会输出？");//输出
// }

// var b = 34;
// if(45 == b){//为了写错了会报错
//     console.log("是否会输出？");//不输出
// }



//12
// console.log("1"+"2");//12
// console.log("1"+2);//12
// console.log("5"-2);//3
// console.log(true+true);//2
// console.log(1+{});//1[object Object]

// var x = "1";
// console.log(++x); //2 
// console.log(x++);//2
// console.log(--x);//2
// var x = "1";
// console.log(x+1);//11
// console.log(1-x);//0

// var i=1;
// var y = ++i + ++i + ++i;
// console.log(y);//9

//13
// console.log(3===3);//t
// console.log(3==="3");//f
// console.log(3=="3");//t
// console.log(3==new String(3));//t引用类型转换成基本类型
// console.log(3===new String(3));//f

// var obj1 = new String("xyz");
// var obj2 = new String("xyz");
// console.log("xyz"===obj1);//f
// console.log(obj1 == obj2);//f
// console.log(obj1 === obj2);//f
// console.log(obj1 == new String("xyz"));//f

// var obj1 = new String("xyz");
// var obj2 = new String("xyz");
// console.log("xyz"!=obj1);//f
// console.log(obj1 !== obj2);//t
// console.log(obj1 != obj2);//t
// console.log(obj1 != new String("xyz"));//t


// console.log(2 == 2);//t
// console.log(new Number(2) == new Number(2));//f
// console.log(2 == new Number(2));//t


//14
// console.log(2>1&&4<5);//t
// console.log(true&&(!2));//f
// console.log(false&&("2" == 2));//f
// console.log(false&&false);//f

// console.log(2>1||4<5);//t
// console.log(true||(!2));//t
// console.log(false||("2" == 2));//t
// console.log(false||false);//f

//15
// //操作数非布尔类型，&&短路原则
// console.log(2&&4);//4
// console.log(0&&4);//0
// console.log({x:2}&&{name:"Jack"});//{name:"jack"}
// console.log(null&&"hello");//null
// console.log({}&&"world");//world

// //操作数非布尔类型，||短路原则
// console.log(2||4);//2
// console.log(0||4);//4
// console.log({x:2}||{name:"Jack"});//{x:2}
// console.log(null||"hello");//hello
// console.log({}||"world");//{}

// //思考 所有对象转换为布尔类型 都为 true
// console.log((new Boolean(false))&&234);//234
// console.log((new Boolean(false))||234);//false

//16
// var score = 76;
// if(score>90){
//     console.log("优");
// }else if(score>75){
//     console.log("良");
// }else if(score>60){
//     console.log("及格");
// }else{
//     console.log("不及格");
// }
// console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格")



//17
// var sum = function(a,b,c){
//     b = b||4;
//     c = c||5;
//     return a+b+c;
// };
// console.log(sum(1,2,3));//6 1+2+3
// console.log(sum(1,2));//8 1+2+5
// console.log(sum(1));//10 1+4+5
// console.log(sum(1,0,0));//10 1+4+5

var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));//6 1+2+3
console.log(sum(1,2));//8 1+2+5  特殊：undefined==false Boolean(undefined)==flase 此处是前者！！！
console.log(sum(1));//10 1+4+5
console.log(sum(1,0,0));//1

//通过函数说明定义
// function c(a,b){
//     console.log(a,b)
// }
// c(1,2)
// //表达式生成函数   匿名函数也可以不匿名
// var c=function(a,b){
//     console.log(a,b);
// }
// c(1,2);
// //通过Function构造函数实例化的形式来定义
// var str="console.log(a,b)";
// var c=new Function("a","b",str);
// c(1,2);

// var str="a=3;{console.log(a,b)}";
// var c=new Function("a","b",str);
// c(1,2);//3 2



//02

// var x=45;
// var test=function(){
//     console.log("输出：",this.x);
// }
// var obj={
//     x:23
// };
// obj.test=test;
// obj.test();//23 主体是obj
// test();//45   主体是window

// var x=45;
// var obj={
//     x:23,
//     test:function(){
//         function foo(){
//             console.log(this.x,this);
//         }
//         foo();//foo是test里嵌套的，没有直接绑定obj
//     }
// }
// obj.test();//45  

// obja={
//     name:"aa",
//     x:1,
//     y:2
// };
// objb={
//     name:"bb",
//     x:3,
//     y:4
// };
// obja.foo=function (){
//     console.log(this.x);
// }
// obja.foo();//1
// obja.foo.call(objb);//3


// obja.foo.call(objb,x,y)
// obja.foo.apply(objb,[x,y])//apply数组形式


// var fish={
//     name:fish,
//     swim:function(m,n){
//         console.log("i can swim",m,n);
//     }
// };
// var bird={
//     name:bird,
//     fly:function(m,n){
//         console.log("i can fly",m,n);
//     }
// };
// var me={
//     name:"abc"
// };
// bird.fly(1,2);
// fish.swim.call(me,2,3);
// bird.fly.apply(me,[4,5]);

// var obj={name:"obj"};
// var sayHi = function () {
//     console.log("Hi，i'm",this.name);
// };
// obj.sayHi = sayHi;//添加给对象添加方法
// obj.sayHi();//Hi，i'm obj


// //直接调用sayHi();
// var name="全局";
// var obj={name:"obj"};
// var sayHi = function () {
//     console.log("Hi，i'm",this.name);
// };
// //直接调用
// sayHi();//Hi，i'm 全局

//03
//实参大于形参数
// function test (){
//     console.log(arguments);//[hello ,world,```]类数组对象
//     console.log(test.arguments==arguments,arguments);//false []
//     console.log(arguments.length);//2
//     console.log(typeof arguments);//Object
//     console.log(arguments instanceof Array);//false
//     console.log(arguments instanceof Object);//true
//     console.log(Array.prototype.slice.call(arguments));
//     var s="";
//     for(var i=0;i<arguments.length;i++)
//     {
//         s+=arguments[i];
//     }
//     return s;
// }
// test("hello,","world");

//实参数小于形参数
// var sum=function(a,b,c){
//     b=b||4;
//     c=c||5;
//     return a+b+c;
// };
// console.log(sum(1,2,3));//6
// console.log(sum(1,2));//8
// console.log(sum(1));//10

//04
//值传递
// var a=1;
// function foo(x){
//     console.log("a:",a,"x:",x);//a:1  x:1
//     x=2;
//     console.log("a:",a,"x:",x);//a:2  x:2
// }
// console.log("a:",a);//a:1
// foo(a);
// console.log("a:",a);//a:1

//LS07 引用传递
var obj={x:1};
function fee(o){
    console.log("obj.x:",obj.x,"o.x",o.x);//obj.x:1 o.x:1
    o.x=3;
    console.log("obj.x:",obj.x,"o.x",o.x);//obj.x:3  o.x:3
}
console.log("obj.x:",obj.x);//obj.x:1
fee(obj);
console.log("obj.x:",obj.x);//obj.x:3
