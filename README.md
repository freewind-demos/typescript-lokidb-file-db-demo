TypeScript LokiDb File Db Demo
===========================

LokiDb是一个文件型数据库。

默认保存在memory，需要使用`@lokidb/fs-storage`并调用`db.saveDatabase()`保存到文件中。

注意：
1. 没有提供一个确认数据库是否存在的函数，loadDatabase时会报错
2. 需要调用`saveDatabase`保存一个空的数据库，里面实际上是一些元数据

```
npm install
npm run demo
```
