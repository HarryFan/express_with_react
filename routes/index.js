const express = require('express');
const router = express.Router();

const todos = [
  {id: 1, text: 'Learn React'}, 
  {id: 2, text: 'Learn Redux'},
  {id: 3, text: 'Learn React Router'},
 
];


/* GET home page. */
router.get('/todos', function(req, res, next) {
  res.json(todos);
});

let todoId = todos.length;

// POST: Create a new todo
router.post('/todos', function(req, res, next) {
  const newTodo = { id: ++todoId, text: req.body.text };
  todos.push(newTodo);
  res.json(newTodo);
});

// PUT: Update an existing todo
router.put('/todos/:id', function(req, res, next) {
  const todo = todos.find(todo => todo.id == req.params.id);
  if (todo) {
    todo.text = req.body.text;
    res.json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
});

// DELETE: Delete an existing todo
router.delete('/todos/:id', function(req, res, next) {
  const index = todos.findIndex(todo => todo.id == req.params.id);
  if (index !== -1) {
    todos.splice(index, 1);
    res.json({ message: 'Todo deleted' });
  } else {
    res.status(404).send('Todo not found');
  }
});

module.exports = router;

