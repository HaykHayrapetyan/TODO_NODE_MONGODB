const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TODO');

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

var get = () => {    
    return todoModel.find({}, {title: 1});
}

var post = (obj) => {
    var todoik = new todoModel(obj);
    return todoik.save()
    .then(()=>{
        return todoModel.find({}, {title: 1})
    })
}

var deleting = (_id) => {
    console.log('jnjim')
    return todoModel.remove({_id})
        .then(() => {
            return todoModel.find({});
        });
}

var editing = (_id, title) => {
    return todoModel.update({ _id}, { $set: {title}})
        .then(() => {
            return todoModel.find({});
        })
}


module.exports.addTodo = get;
module.exports.postTodo = post;
module.exports.deleteTodo = deleting;
module.exports.editTodo = editing;
