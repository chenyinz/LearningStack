# 代理模式

1. 通过设置`git config --global --list `来查看值
   ` git config -- global --unset-all http.proxy` 删除所设置的代理模型的值
2. 通过
   ```
   git config --global http.proxy "socks://127.0.0.1:10808"
   git config --global https.proxy "socks://127.0.0.1:10808"
   ```
   即可 其中 127.0.0.1 为本地 10808 为 vpn 端口号
