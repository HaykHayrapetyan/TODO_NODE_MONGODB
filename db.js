const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TODO');

var Schema = mongoose.Schema;

var Schema = new Schema({
    title: String,
    userName: String
});

var todoModel = mongoose.model('todos', Schema);


var get = (userName) => {    
    return todoModel.find({userName}, {title: 1});
}

var post = (obj, userName) => {
    var todoik = new todoModel(obj);
    return todoik.save()
    .then((todo)=>{
        
        return todoModel.find({userName: todo.userName}, {title: 1})
    })
}

var deleting = (_id, userName) => {
    
    return todoModel.remove({_id})
        .then(() => {
            return todoModel.find({userName});
        });
}

var editing = (_id, title, userName) => {
    return todoModel.update({ _id}, { $set: {title}})
        .then(() => {
            return todoModel.find({userName});
        })
}


module.exports.addTodo = get;
module.exports.postTodo = post;
module.exports.deleteTodo = deleting;
module.exports.editTodo = editing;
