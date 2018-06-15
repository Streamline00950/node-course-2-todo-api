const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    //musialem cos takiego, inaczej wywala blad na v3+
    const myDB = db.db('TodoApp');
    myDB.collection('Todos');

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // myDB.collection('Todos').find({
    //     _id: new ObjectID("5b22cc79cb0adb2a845dbed4")
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err)=>{
    //     console.log('Unable to fetch Todos', err);
    // });

    // myDB.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //     console.log('Unable to fetch Todos', err);
    // });

    myDB.collection('Users').find({
        name:"Mike"
    }).toArray().then((docs)=>{
        console.log('Users: ');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch data', err);
    })


    // db.close();
});