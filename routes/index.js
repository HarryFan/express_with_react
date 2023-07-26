const express = require('express');
const router = express.Router();

const todos = [
  {id: 1, title: 'Learn React', completed: false}, 
  {id: 2, title: 'Learn Redux', completed: true},
  {id: 3, title: 'Learn React Router', completed: false},
  {id: 4, title: 'Learn Express', completed: false},
  {id: 5, title: 'Learn Node', completed: false},
  {id: 6, title: 'Learn MongoDB', completed: false},
  {id: 7, title: 'Learn Mongoose', completed: false},
];

/* GET home page. */
router.get('/todos', function(req, res, next) {
  res.json(todos);
});


module.exports = router;

