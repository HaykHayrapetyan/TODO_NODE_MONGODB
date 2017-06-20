const express = require('express');
const api = express.Router();
const todos = [25];

api.get('/todos', (req, res) => {
    res.json(todos);
});

module.exports = api;