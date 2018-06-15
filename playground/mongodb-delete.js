const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    //musialem cos takiego, inaczej wywala blad na v3+
    const myDB = db.db('TodoApp');
    myDB.collection('Todos');

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // myDB.collection('Todos').deleteMany({
    //     text:'Eat lunch'
    // }).then((result)=>{
    //     console.log(result);
    // })

    // // //deleteOne
    // myDB.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // })

    //findOneAndDelete
    // myDB.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // })

    // db.close();
});