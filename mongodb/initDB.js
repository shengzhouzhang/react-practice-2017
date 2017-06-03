const { MongoClient } = require('mongodb');
const ListingOne = require('../data/listing-1.json');
const ListingTwo = require('../data/listing-2.json');

const url = 'mongodb://localhost:27017/mydb';

function insertDocuments(db, callback) {
  db.collection('listings').insertMany([ListingOne, ListingTwo], callback);
}

MongoClient.connect(url, (connectError, db) => {
  if (!connectError) {
    insertDocuments(db, (insertError) => {
      if (insertError) {
        console.error('fail to insert listings', insertError);
      } else {
        console.log('Inserted documents');
      }
    });
    db.close();
    return;
  }

  console.error('fail to connect db', connectError);
});
