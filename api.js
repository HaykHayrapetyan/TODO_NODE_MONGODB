const express = require('express');
const api = express.Router();
const mongose = require('./db');




api.get('/todos', (req, res) => {
    
    mongose.addTodo(req.cookies.userName)
        .then(data => {
            
            res.status(200).json(data);
        })
});

api.post('/todos', (req, res) => {
    
    mongose.postTodo({title: req.body.title, userName: req.cookies.userName})
        .then(data => {
            res.status(200).json(data)
        })
    
})

api.delete('/todos/:id', (req, res) => {
    mongose.deleteTodo(req.params.id, req.cookies.userName)
    .then((data) => {
        res.status(200).json(data)
    })

})

api.put('/todos/:id', (req, res) => {
    
    mongose.editTodo(req.params.id, req.body.title, req.cookies.userName)
        .then((data) => {
            res.status(200).json(data);
        })
    
})


module.exports = api;

