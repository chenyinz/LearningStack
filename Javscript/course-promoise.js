// Promise知识点
// 1、Promise的基本概念 是用于处理异步操作的对象、它代表一个一部操作的最终完成或失败，并返回结果或错误信息
// 2、Promise的状态：pending、fulfilled、rejected
// 3、Promise接受一个执行器函数作为参数、有两个参数：resolve和reject 在{}执行异步操作，并通过调用resolve、reject函数来表示成功或者失败
// 4、Promise提供链式调用 .then() 方法用于注册成功回调函数，catch()方法用于注册失败的回调函数，每个。then()方法返回一个新的Promise
// 5、Promise的错误处理 除了可以通过catch也可以通过。finally函数 无论成功或者失败都执行
// 6、Promise并行和串行，通过使用Promise.all()方法可以将多个Promise对象组合成一个新的Promise.当所有Promise成功他才会成功、使用Promise.race()当任何一个Promise成功或失败时，该新的Promise就会成功或失败。
// 7、Promise的异步操作 可以使用setTimeout、setInterval、XMLHttpRequest、fetch等方法进行异步操作，可以将这些方法封装在Promise找那个，以管理异步操作和处理结果

// Promise是一个对象
// exsample 加载图片
// let PromiseID = document.getElementById("PromiseId");
// function PromiseButton(ButtonValue) {
//   return new Promise((resolve, reject) => {
//     if (ButtonValue == "ButtonValue") {
//       resolve(ButtonValue);
//     } else {
//       reject(ButtonValue + "Error");
//     }
//   });
// }
// console.log(PromiseID.textContent);
// PromiseButton(PromiseID).then(
//   (value) => {
//     console.log(value);
//   },
//   (value) => {
//     console.log(value);
//   }
// );

// const promise = new Promise((resolve, reject) => {
//   let n = 11;
//   if (n == 10) {
//     resolve(n);
//   } else {
//     reject(12);
//   }
// });
// promise.then(
//   (value) => {
//     console.log(value);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

//涉及异步操作、条件判断、多个Promise的串联和并联执行
//假设有一个异步函数，用于模拟从服务器获取数据的操作
// function fetchDataFromServer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "xiaowang" };
//       resolve(data);
//     }, 1000);
//   });
// }
// fetchDataFromServer
//   .then((data) => {
//     console.log(data);
//     return validateData(data);
//   })
//   .then((data) => {});
