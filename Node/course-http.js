const http = require("http");
const server = http.createServer((req, res) => {
  // 处理请求和发送响应逻辑
  console.log("受到一个请求");
  console.log("请求方法:", request.method);
  console.log("请求 URL:", request.url);
  console.log("请求头部:", request.headers);
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello, World!");
  response.end();
});
server.on(3000, () => {
  console.log("服务器已启动，正在监听端口 3000");
});

const server1 = http.createServer((request, response) => {
  if (request.method === "GET") {
    // 处理 GET 请求
  } else if (request.method === "POST") {
    // 处理 POST 请求
  } else if (request.method === "PUT") {
    // 处理 PUT 请求
  } else if (request.method === "DELETE") {
    // 处理 DELETE 请求
  } else {
    response.statusCode = 405; // 方法不允许
    response.end();
  }
});

server.listen(3000, () => {
  console.log("服务器已启动，正在监听端口 3000");
});

const server2 = http.createServer((request, response) => {
  if (request.url === "/home") {
    // 处理主页请求
  } else if (request.url === "/about") {
    // 处理关于页面请求
  } else {
    response.statusCode = 404; // 找不到页面
    response.end();
  }
});

server.listen(3000, () => {
  console.log("服务器已启动，正在监听端口 3000");
});

const http = require("http");
const querystring = require("querystring");

const server4 = http.createServer((request, response) => {
  if (request.method === "POST") {
    let formData = "";
    request.on("data", (chunk) => {
      formData += chunk;
    });

    request.on("end", () => {
      const parsedData = querystring.parse(formData);
      console.log("表单数据:", parsedData);
      // 处理表单数据的逻辑
    });
  }
});

server.listen(3000, () => {
  console.log("服务器已启动，正在监听端口 3000");
});

const server6 = http.createServer((request, response) => {
  try {
    // 可能会抛出错误的同步代码
  } catch (error) {
    console.error("发生错误:", error);
    response.statusCode = 500; // 服务器内部错误
    response.end();
  }
});

server.listen(3000, () => {
  console.log("服务器已启动，正在监听端口 3000");
});

const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("private-key.pem"),
  cert: fs.readFileSync("certificate.pem"),
};

const server8 = https.createServer(options, (request, response) => {
  // 处理 HTTPS 请求的逻辑
});

server8.listen(443, () => {
  console.log("HTTPS 服务器已启动，正在监听端口 443");
});
