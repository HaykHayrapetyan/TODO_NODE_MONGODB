const express = require('express');
const api = express.Router();
const mongose = require('./db');
let id = 1;
const todos = [];



api.get('/todos', (req, res) => {
    res.json(mongose)
   // res.json(todos);
});

api.post('/todos', (req, res) => {
    
    todos.push({id, title: req.body.todo});
    id++;
    res.json(todos);
})

api.delete('/todos/:id', (req, res) => {
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === +req.params.id){
            todos.splice(i, 1);
        }
    }
    res.json(todos);
})

api.put('/todos/:id', (req, res) => {
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === +req.params.id){
            todos[i].title = req.body.title;
        }
    }
    res.json(todos);
})


module.exports = api;

