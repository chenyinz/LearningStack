// const data = { name: "afa", age: 12 };
// var obj = new Proxy(
//   {},
//   {
//     get: function (target, propKey, receiver) {
//       console.log(`getting ${propKey}!`);
//       return Reflect.get(target, propKey, receiver);
//     },
//     set: function (target, propKey, value, receiver) {
//       console.log(`setting ${propKey}!`);
//       return Reflect.set(target, propKey, value, receiver);
//     },
//   }
// );
// const data = { age: 12 };
// const handle = {
//   get: (target, propKey) => {
//     if (propKey in target) {
//       console.log(propKey in target, target[propKey]);
//       return target[propKey];
//     } else {
//       throw new ReferenceError('Prop name "' + propKey + '" does not exist.');
//     }
//   },
// };
// var proxyData = new Proxy(data, handle);
// proxyData.name;
// proxyData.age;
// var arr = [1, 2, 3];
// console.log(arr[1]);
