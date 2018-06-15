// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

// let user = {name:'Andrew',age:25};
// let {name} = user;
// console.log(name);  //wynik Andrew

//TodoApp samo mi stworzy, jezeli go nie ma
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    //musialem cos takiego, inaczej wywala blad na v3+
    const myDB = db.db('TodoApp');
    myDB.collection('Todos');

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // myDB.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    
    // myDB.collection('Users').insertOne({
    //     name:'Mike',
    //     age:23,
    //     location:"San Francisco"
    // },(err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert user',err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    db.close();
});