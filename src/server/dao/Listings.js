
import Promise from 'bluebird';
import conn from './conn';

export default function fetchListings(query) {
  return conn.then(db => new Promise((resolve, reject) => {
    db.collection('listings').find(query).toArray((err, data) => {
      if (err) { reject(err); return; }
      resolve(data);
    });
  }));
}
