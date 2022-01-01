import LokiDb from '@lokidb/loki';
import {FSStorage} from '@lokidb/fs-storage';

type Post = {
  title: string;
}

async function hello() {
  // FSStorage.register();
  const db = new LokiDb("db/db.json");
  await db.initializePersistence({
    adapter: new FSStorage(),
    autoload: true
  });

  const posts = db.addCollection<Post>('posts');

  posts.insert({title: 'hello1'});
  posts.insert({title: 'hello2'});
  posts.insert({title: 'hello3'});
  posts.insert({title: 'hello4'});

  const hello3 = posts.findOne({title: 'hello3'});
  hello3.title = 'hello33'
  posts.update(hello3);

  console.log("### posts", JSON.stringify(posts.find(), null, 4))

  await db.saveDatabase();


  await db.close();

}

hello()
