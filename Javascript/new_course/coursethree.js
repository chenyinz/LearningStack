//数组

//数组的创建 同样采用字面值的形式
const item = [];
//向数组中添加一个值
const item2 = [];
item2.push("test1");
console.log(item2);
//使用扩展运算符做数组浅拷贝，类似上面的对象浅拷贝
const item3 = ["test1", "test2", "test3"];
console.log(item3);
//将一个可迭代的对象转换成数组 可以使用...
const nodes = [...foo];
//将一个类数组对象转换一个数组。
const arrlike = { 0: 112 };
const arr = Array.from(arrlike);
console.log(arr);
console.log("this is test");
//在数组方法的回调函数中使用 return 语句。如果函数体由一条返回一个表达式的语句组成，并且这个表达式没有副作用， 这个时候可以忽略 return，
console.log([1, 2, 3].map((x) => x + 1));
//如果一个数组有很多行，在数组的 [ 后和 ] 前断行。请看下面示例
const arr6 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];
