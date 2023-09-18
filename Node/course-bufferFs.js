// buffer类似数组的对象、本质是一段内存空间、专门用来处理二进制数据
const { Buffer } = require("node:buffer");
// 分配字节
const buf1 = Buffer.alloc(10);

const buf2 = Buffer.alloc(10, 1);

const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.from([1, 2, 3]);

// 默认转化为十六进制
const buf6 = Buffer.from("hello world");
console.log(buf6);

// 将十六进制转为字符
const buf5 = Buffer.from("hello world", "utf-8");
console.log(buf5.toString());
// console.log(buf1, buf2, buf3, buf4);
//

// file system
const fs = require("fs");
fs.readFile("./sample.txt", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data.toString());
});

fs.writeFile("./sample.txt", "testwriter", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("文件写入成功");
});
content = "12123";
// fs.writeFileSync("example.txt", content);
fs.appendFile("./sample.txt", content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("追加成功");
});
// fs.unlink("./sample-copy.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("删除成功");
// });
fs.stat("./sample.txt", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.atime);
});
fs.readdir("aswe", (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach((file) => {
    console.log(file);
  });
});
fs.mkdir("newFolder", (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("目录创建成功");
});
