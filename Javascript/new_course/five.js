//函数声明与函数表达式
// 函数声明
// (function () {
//   console.log("Welocome to the Internet");
// });
// let test;
// if (true) {
//   test = () => {
//     console.log("Yup");
//   };
// }

//不要使用arguments命名参数 他的优先级高于每个函数作用域自带的arguments对象，这会导致函数自带的arguments值被覆盖

//使用...args来收集参数
// function handleThings(opts = {}) {
//     // ...
//   }

//把默认参数赋值放在最后
// function handleThings(name,opt={}){

// }
//不要修改参数
//操作参数对象对原始调用者会导致意想不到的副作用，就是保留参数原始值和数据结构。

//箭头函数
// [1, 2, 3].map((x) => {
//   const y = x * 2;
//   console.log(y);
// });
//使用箭头函数时 当函数体由一个没有副作用的表达式语句组成，可以删除括号和return
// [1, 2, 3].map((x) => console.log(`this test value ${x * 2}`));

//如果表达式涉及多行的话 可以使用()进行包裹
// 例如
// ["get", "post", "put"].map((httpMethod) =>
//   Object.prototype.hasOwnProperty.call(
//     httpMagicObjectWithAVeryLongName,
//     httpMethod
//   )
// );

//类与构造函数
//使用 class 语法。避免直接操作 prototype。
// class Queue {
//   constructor(contents = []) {
//     this.queue = [...contents];
//   }
//   pop() {
//     const value = this.queue[0];
//     this.queue.splice(0, 1);
//     return value;
//   }
// }
// const queue = new Queue([1, 2, 3]);
// console.log(queue);

//避免重复定义类成员
//除非外部库或框架需要使用特定的非静态方法，否则类方法应该使用 this 或被写成静态方法

//模块
// 不要使用通配符*
// 一个路径只import一次,y因为多行导入同一路径将使代码变得难以维护。
// export default function foo() {} 单个文件只有一个导出文件是最好的
//多行数组应该缩进

//迭代器与生成器
//使用javascript高级函数代替for-in for-of
// 这强调了我们不可变的规则。 处理返回值的纯函数比处理副作用更容易。
// 用数组的这些迭代方法： map() / every() / filter() / find() / findIndex() / reduce() / some() / ... , 用对象的这些方法
//  Object.keys() / Object.values() / Object.entries() 去产生一个数组，这样你就能去遍历对象了
// const numbers = [1, 2, 3, 4, 5];
// const sum = 0;
// numbers.forEach((num) => (sum += num));
// console.log(numbers.map((num) => num * 2));

//属性
// 访问属性时 使用. 获取[]
