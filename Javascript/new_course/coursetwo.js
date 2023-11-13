//类型 js有七个类型
//number string boolean null undefined symbol bigint
//其中Symbol是ES6引入的一种新的基本数据类型，用于表示一个独一无二的值。
// symbol有以下特点 值是唯一的，用来解决命名冲突问题 不能与其他数据进行运算 不能进行比那里
//Bigint数据类型 可以表示任意大的整数 即使抄书javascript number的安全整数限制，也可以安全地存储和操作大整数
//因number是双精度浮点数，可以表示的最大安全范围是正负2的53次方减一。
// undefined 表示未定义 也就是使用var或let声明变量却没有将其赋值时的情况。
// null类型同样也只有一个值，就是特殊值null。逻辑上讲，null是一个空对象指针，
// undefined是由null派生来的，所以它们表面相等

//引用
// const 当要对一个变量进行赋值时，最好使用const 以保证最初赋值的值不会被改变
// 如果一定要对所赋值的变量进行改变的话 那么可以使用let、const进行赋值操作 因为let是块级作用域 var是函数作用域

// var count = 1;
// if (true) {
//   count += 1;
//   console.log("count: " + count);
// }
// let count = 1;
// if (true) {
//   count += 1;
//   console.log("count1: " + count);
// }

//对象
//创建对象的方式 使用字面值创建对象
const item = {};
//创建具有动态属性名的对象
function getName(key) {
  return `this is test1 ${key}`;
}
const item1 = {
  id: 5,
  name: "xiaochen",
  [getName("test2")]: "this is test2",
};
console.log(item1);
// 用对象方法简写
const item3 = {
  value: 1,
  addValue(value) {
    return `this is value ${value}`;
  },
};
console.log(item3.addValue(22));
// 属性值简写
const luke = "lukeOne";
const name = {
  luke,
};
console.log(name.luke);
// 将你的所有缩写放在对象声明的前面
const luke1 = "lukeOne";
const luke2 = "lukeOne";
const obj = {
  luke1,
  luke2,
  test: "test4",
};
console.log(obj);
//对于那些无效的表示使用引号''
const good = {
  foo: 3,
  "data-blas": 5,
};
console.log(good);
// 不要直接调用object.prototype

//浅拷贝与解构运算符
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 };
console.log(copy);
const { a, ...noA } = copy;
console.log(a);
