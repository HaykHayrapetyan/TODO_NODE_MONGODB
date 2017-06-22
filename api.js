const express = require('express');
const api = express.Router();
const mongose = require('./db');
let id = 1;
const todos = [];



api.get('/todos', (req, res) => {
    
    mongose.addTodo()
        .then(data => {
            res.status(200).json(data);
        })
});

api.post('/todos', (req, res) => {
    
    mongose.postTodo({title: req.body.title})
        .then(data => {
            res.status(200).json(data)
        })
    // todos.push({id, title: req.body.todo});
    // id++;
    // res.json(todos);
})

api.delete('/todos/:id', (req, res) => {
    mongose.deleteTodo(req.params.id)
    .then((data) => {
        res.status(200).json(data)
    })

    // for(let i = 0; i < todos.length; i++){
    //     if(todos[i].id === +req.params.id){
    //         todos.splice(i, 1);
    //     }
    // }
    // res.json(todos);
})

api.put('/todos/:id', (req, res) => {
    
    mongose.editTodo(req.params.id, req.body.title)
        .then((data) => {
            res.status(200).json(data);
        })
    
    // for(let i = 0; i < todos.length; i++){
    //     if(todos[i].id === +req.params.id){
    //         todos[i].title = req.body.title;
    //     }
    // }
    // res.json(todos);
})


module.exports = api;

