const mongoose = require('mongoose');

const db = []

mongoose.connect('mongodb://localhost:27017/Todo');

var Schema = mongoose.Schema;

var Schema = new Schema({
    title: String
});

var todoModel = mongoose.model('todos', Schema);

// var todo = new todoModel({
//      title: "vazel"
// });

// todo.save()
// .then(()=>{
//     return todoModel.find({}, {title: 1})
// })
// .then(data => {
   
//     db.push(data);
    

// }).catch(err=>console.log(err))

todoModel.find({}, {title: 1})
.then(data => {
   
    db.push(data);
    

}).catch(err=>console.log(err))

module.exports = db;