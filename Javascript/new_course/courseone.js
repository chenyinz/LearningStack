// console.log("this is test".length);
// console.log("this is rest".length);
// console.log("THIS IS TEST".toLocaleLowerCase());
// console.log(" this is test ".trim());
// console.log("this is test ".charCodeAt(0));
// const x = 100;
// console.log(x + 100);

// const foo = 1;
// let bar = foo;
// bar = 9;
// console.log(foo, bar);

// const foo1 = [1, 2];
// const bar1 = foo1;
// bar1[0] = 9;
// console.log(foo1[0], bar1[0]); // => 9, 9

// let a = 1; //使用let使用var的原因 有let，const都是块级作用域 var是函数作用域
// a = 2;
// console.log(a);

// var count = 1;
// if (true) {
//   count += 1;
//   console.log(count);
// }
// let count = 1;
// if (true) {
//   count += 1;
//   console.log(count);
// }
// 使用字面值创建对象

// const item = {};

//创建一个动态属性名的对象
// function getKey(key) {
//   return `this is ${key}`;
// }
// const obj = {
//   id: 5,
//   name: "xiaochen",
//   [getKey("test")]: true,
// };
// console.log(obj);

//对象方法
// const atom = {
//   value: 1,
//   addValue(value) {
//     return atom.value + value;
//   },
// };
// console.log(atom.value);
// console.log(atom.addValue(2));

//对象缩写的部分 放在对象前面
// const luke = "Luck Skywalker";
// const obj = {
//   luke,
// };
// console.log(obj.luke);

//对于无效标识 应该如何处理 不仅优化了代码高亮，而且也更容易被许多JS引擎优化
// const good = {
//   foo: 3,
//   bar: 4,
//   "data-test": 5,
// };
// console.log(good);

//不要直接调用Object.prototype上的方法 涉及到原始链的概念
// const has = Object.prototype.hasOwnProperty; // 在模块作用域内做一次缓存。
// console.log(has.call(object, key));

// 浅拷贝
// const original = { a: 1, b: 2 };
// const copy = { ...original, c: 3 };
// const { a, ...noA } = copy;
// console.log(copy);
// copy.a = 22;
// console.log(copy);
// console.log(original);

// 继承

// class person {
//   constructor(name) {
//     this.name = name;
//   }
//   drink() {
//     return `喝了好多水`;
//   }
// }
// class student extends person {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
//   status() {
//     return `今天的状态${this.age}`;
//   }
// }
// class teacher extends person {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
//   status() {
//     return `今天的状态${this.age}`;
//   }
// }
// const students = new student("xiaowang", 12);
// const teachers = new teacher("xiaochen", 22);
// console.log(students, teachers);
// console.log(students.drink(), teachers.drink());
// console.log(students.status(), teachers.status());

//原型链

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   speak() {
//     return `this is ${this.name} ${this.age}`;
//   }
// }
// const student = new Student("xiaochen", 12);
// console.log(student.__proto__); //称之为隐式链
// console.log(Student.prototype); //称之为显示链

//检查对象本身是否拥有该属性 可以通过使用hasOwnPropety()方法  而该方法的由来是从Object对象中由来 其基类

// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   speak() {
//     return `this is test`;
//   }
// }
// class Teacher extends person {
//   constructor(status) {
//     super("xiaochen", 12), (this.status = status);
//   }
//   currentStatus() {
//     return `current status: ${this.status}`;
//   }
// }
// const teacher = new Teacher("good");
// console.log(teacher);
// console.log(teacher.hasOwnProperty("status"));
// console.log(teacher.hasOwnProperty("name"));
// console.log(teacher.hasOwnProperty("speak"));

//instanceof作为类型判断 其本质就是检查对象是否在原始链上 存在即为true
// const data1 = [];
// const data2 = {};
// console.log(data1 instanceof Array);
// console.log(data2 instanceof Array);
// console.log(data1 instanceof Object);
// console.log(data2 instanceof Object);
