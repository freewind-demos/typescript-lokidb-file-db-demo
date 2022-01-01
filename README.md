TypeScript LokiDb File Db Demo
===========================

LokiDb是一个文件型数据库。

默认保存在memory，需要使用`@lokidb/fs-storage`并调用`db.saveDatabase()`保存到文件中。

注意：
1. 只有把`autoload`设为true，它才会忽略数据库文件不存在时的报错
2. 否则只要手动调用了`loadDatabase`，如果文件还不存在，就会报错（除非专门调用`saveDatabase`创建一个空的数据库）
3. 数据库文件是一个json文件，里面是一些元数据+数据文件
4. `saveDatabase`会把内存中的数据保存到文件中

```
npm install
npm run demo
```
