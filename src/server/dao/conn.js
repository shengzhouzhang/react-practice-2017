import Promise from 'bluebird';
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017/mydb';

export default new Promise((resolve, reject) => {
  MongoClient.connect(url, (err, db) => {
    if (err) { reject(err); return; }
    resolve(db);
  });
});
