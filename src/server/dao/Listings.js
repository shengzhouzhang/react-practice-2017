import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017/listings';

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error('error', err);
    return;
  }
  console.log('Connected successfully to server');
  console.log(db);
  db.close();
});
