const express = require('express'); // 引入 express 模組
const router = express.Router(); // 建立一個新的路由器

const todos = [ // 建立一個待辦事項的陣列
  {id: 1, text: 'Learn React'}, 
  {id: 2, text: 'Learn Redux'},
  {id: 3, text: 'Learn React Router'},
 
]; // 這是我們的待辦事項列表

/* GET home page. */
router.get('/todos', function(req, res, next) { // 處理 GET 請求，回傳待辦事項列表
  res.json(todos); // 將待辦事項列表以 JSON 格式回傳
});

let todoId = todos.length; // 設定新待辦事項的 ID，其值為待辦事項列表的長度

// POST: Create a new todo
router.post('/todos', function(req, res, next) { // 處理 POST 請求，新增待辦事項
  const newTodo = { id: ++todoId, text: req.body.text }; // 建立新的待辦事項
  todos.push(newTodo); // 將新的待辦事項加入到待辦事項列表中
  res.json(newTodo); // 將新的待辦事項以 JSON 格式回傳
});

// PUT: Update an existing todo
router.put('/todos/:id', function(req, res, next) { // 處理 PUT 請求，更新待辦事項
  const todo = todos.find(todo => todo.id == req.params.id); // 找到要更新的待辦事項
  if (todo) {
    todo.text = req.body.text; // 更新待辦事項的內容
    res.json(todo); // 將更新後的待辦事項以 JSON 格式回傳
  } else {
    res.status(404).send('Todo not found'); // 如果找不到待辦事項，回傳 404 錯誤
  }
});

// DELETE: Delete an existing todo
router.delete('/todos/:id', function(req, res, next) { // 處理 DELETE 請求，刪除待辦事項
  const index = todos.findIndex(todo => todo.id == req.params.id); // 找到要刪除的待辦事項的索引
  if (index !== -1) {
    todos.splice(index, 1); // 刪除該待辦事項
    res.json({ message: 'Todo deleted' }); // 刪除成功，回傳訊息
  } else {
    res.status(404).send('Todo not found'); // 如果找不到待辦事項，回傳 404 錯誤
  }
});

module.exports = router; // 將路由器匯出，讓其他模組可以使用

