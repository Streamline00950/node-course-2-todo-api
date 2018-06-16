const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

let id="5b240af4dbf7e30468b05220";

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id //mongoose nie potrzebuje new objectID
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });


// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By id', todo);
// });


User.findById(id).then((user)=>{
    if(!user){
        return console.log('User not found');
    }
    console.log(JSON.stringify(user,undefined,2));
},(e)=>{
    console.log(e);
})