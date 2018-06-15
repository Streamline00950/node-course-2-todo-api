const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    //musialem cos takiego, inaczej wywala blad na v3+
    const myDB = db.db('TodoApp');
    myDB.collection('Todos');

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // myDB.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b23fb9252cb7db4c6144e7a")
    // },{
    //     $set:{
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // })

    myDB.collection('Users').findOneAndUpdate({
        name:"Jen"
    },{
        $set:{
            name:"Lukasz"
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    })


    // db.close();
});