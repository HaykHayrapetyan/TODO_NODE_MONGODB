const express = require('express');
const api = express.Router();
const todos = [25, 'babgn', 66];

api.get('/todos', (req, res) => {
    res.json(todos);
});

api.post('/todos', (req, res) => {
    todos.push(req.body.todo);
    res.json(todos);
})

module.exports = api;

