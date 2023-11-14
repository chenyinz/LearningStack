//解构 对象解构形式 或者数组解构形式
// 用对象的解构赋值来获取和使用对象某个或多个属性值
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
// getFullName(user);
//数组解构
const arr = [1, 2, 3, 4];
const [first, ...last] = arr;
console.log(first, last);
//多个返回值用对象的解构，而不是数组解构。
const { left, top } = processInput(input);

//字符串
//字符串应该使用单引号‘’
const name = "Capt.Janeway";
//当需要动态生成字符串时，使用模板字符串而不是字符串拼接。
function sayHi(name) {
  return `How are you, ${name}?`;
}
//永用不要使用eval()，该方法有太多漏洞。
//不要使用不必要的转义字符
