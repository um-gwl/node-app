const MongoClient = require('mongodb').MongoClient;
//console.log(mongoClient);return;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url,(err,client) => {
  if(err){
    return console.log('unable to connect mongo database');
  }
  console.log('mongo database connected');
  const db = client.db('Nodetest');

  insertDocument(db,(result) => client.close());
  client.close();
});

const insertDocument = (db,callback) => {
  const collection = db.collection('Todos');
  collection.insertMany([{
      text : 'Something to do',
      completed: false
    }],(err,result) => {
      if(err){
        return console.log('Unable to insert todo',err);
      }
      console.log(JSON.stringify(result.ops,undefined,2));
      callback(result);
    }
  );
};
