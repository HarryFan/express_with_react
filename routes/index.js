const express = require('express'); // 引入 express 模組
const router = express.Router(); // 建立路由器

const todos = [ // 建立待辦事項陣列
  {id: 1, text: 'Learn React'}, 
  {id: 2, text: 'Learn Redux'},
  {id: 3, text: 'Learn React Router'},
 
];


/* GET home page. */
router.get('/todos', function(req, res, next) { // 處理 GET 請求，回傳待辦事項列表
  res.json(todos);
});

let todoId = todos.length; // 設定新待辦事項的 ID

// POST: Create a new todo
router.post('/todos', function(req, res, next) { // 處理 POST 請求，新增待辦事項
  const newTodo = { id: ++todoId, text: req.body.text };
  todos.push(newTodo);
  res.json(newTodo);
});

// PUT: Update an existing todo
router.put('/todos/:id', function(req, res, next) { // 處理 PUT 請求，更新待辦事項
  const todo = todos.find(todo => todo.id == req.params.id);
  if (todo) {
    todo.text = req.body.text;
    res.json(todo);
  } else {
    res.status(404).send('Todo not found'); // 如果找不到待辦事項，回傳 404 錯誤
  }
});

// DELETE: Delete an existing todo
router.delete('/todos/:id', function(req, res, next) { // 處理 DELETE 請求，刪除待辦事項
  const index = todos.findIndex(todo => todo.id == req.params.id);
  if (index !== -1) {
    todos.splice(index, 1);
    res.json({ message: 'Todo deleted' }); // 刪除成功，回傳訊息
  } else {
    res.status(404).send('Todo not found'); // 如果找不到待辦事項，回傳 404 錯誤
  }
});

module.exports = router; // 匯出路由器


