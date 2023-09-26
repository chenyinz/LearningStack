// 1. **全局对象（Global Objects）**：

//    - `Object`：JavaScript 中的基本对象，具有创建对象的能力。
//    - `Array`：用于创建和操作数组。
//    - `String`：用于创建和操作字符串。
//    - `Number`：用于创建和操作数字。
//    - `Boolean`：用于创建和操作布尔值。
//    - `Function`：用于创建函数。
//    - `Date`：用于处理日期和时间。
//    - `RegExp`：用于正则表达式操作。

// 对象的创建
// 给对象添加函数需要格外注意

var person = {};
person.firstName = "John";
person.lastName = "Doe";
person.sayHello = function () {
  console.log("person", this.firstName, this.lastName);
};
var personOne = {
  firstName: "John",
  lastName: "Doe",
  sayHello: function () {
    console.log("personOne", this.firstName, this.lastName);
  },
};

person.sayHello();
personOne.sayHello();

// Array数据对象创建
var fruit = ["apple", "banana", "cherry"];
var numerTest = [1, 2, 3, 4, 5];
console.log(fruit[0]);
fruit.push("WaterMelon");
console.log(fruit);
fruit.forEach((item) => console.log(item));
const result = numerTest.filter((item) => item > 1);
console.log(numerTest.map((item) => item * 2));
const entriesItem = Object.entries(numerTest);
// for of遍历可迭代的对象
for (const [key, values] of entriesItem) {
  console.log(key, values);
}

// String对象 用于创建和操作字符串
var greeting = "hello,world";
var length = greeting.length;
var subString = greeting.replace("hello", "Test");
console.log(subString);
console.log(greeting.substring(0, 5));
console.log(greeting.indexOf("world"));

// Number 对象用于创建和操作数字
var v = 5.55555;
console.log(v.toFixed(2));
// parseInt的作用是将字符串数字内容转为数字
console.log(parseInt("55"));

// Boolean
var isTrue = true;
if (isTrue) {
  console.log(isTrue);
}

// Date对象用于处理日期和时间。例如
var currentDate = new Date();
console.log(currentDate.getFullYear());
console.log(currentDate.getDate());
console.log(currentDate.getUTCDate());

// Regexp对象 用于正则化表达式
// 创建正则表达式有两种方式一个是字面量另外一个就是构造函数
// var pattern = /JavaScript/;
// var text = "JavaScript is a powerful language.";

// Promise
// var promise = new Promise(function (resolve, reject) {
//   // 模拟异步操作，例如从服务器获取数据
//   setTimeout(function () {
//     var date = "获取的信息";
//     resolve(date);
//     //
//     // 失败的话reject("获取数据失败")
//   }, 2000);
// });
// promise
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

var shearch = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var data = "you expired data";
    resolve(data);
  }, 2000);
});
shearch
  .then(function (result) {
    console.log(result);
  })
  .catch(console.error("获取信息失败"));

// Proxy代理对象 用于拦截操作
var target = {
  name: "xiawang",
  age: 12,
};
var handle = {
  // get操作就是获取我们的值
  get: function (target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      throw new Error("Property not found:" + prop);
    }
  },
  //   set操作就是设置我们的值
  set: function (target, prop, value) {
    if (prop === "age" && typeof value !== "number") {
      throw new Error("Age must be a number");
    } else {
      target[prop] = value;
    }
  },
};
var proxy = Proxy(target, handle);
console.log(proxy.name);
