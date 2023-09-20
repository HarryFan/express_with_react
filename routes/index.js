const express = require('express');
const router = express.Router();

const todos = [
  {id: 1, text: 'Learn React'}, 
  {id: 2, text: 'Learn Redux'},
  {id: 3, text: 'Learn React Router'},
];


/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: Todo API
 */



/**
 * @swagger
 * /todos:
 *   get:
 *     description: 獲取所有待辦事項
 *     responses:
 *       200:
 *         description: 以 JSON 格式回傳待辦事項列表
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   text:
 *                     type: string
 */
router.get('/todos', function(req, res, next) {
  res.json(todos);
});

let todoId = todos.length;

/**
 * @swagger
 * /todos:
 *   post:
 *     description: 創建新的待辦事項
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: 以 JSON 格式回傳創建的待辦事項
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 text:
 *                   type: string
 */
router.post('/todos', function(req, res, next) {
  const newTodo = { id: ++todoId, text: req.body.text };
  todos.push(newTodo);
  res.json(newTodo);
});

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     description: 更新已存在的待辦事項
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: 需要更新的待辦事項的 ID
 *       schema:
 *         type: number
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: 以 JSON 格式回傳更新後的待辦事項
 *       404:
 *         description: 找不到待辦事項
 */
router.put('/todos/:id', function(req, res, next) {
  const todo = todos.find(todo => todo.id == req.params.id);
  if (todo) {
    todo.text = req.body.text;
    res.json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
});

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     description: 刪除已存在的待辦事項
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: 需要刪除的待辦事項的 ID
 *       schema:
 *         type: number
 *     responses:
 *       200:
 *         description: 回傳表示待辦事項已被刪除的訊息
 *       404:
 *         description: 找不到待辦事項
 */
router.delete('/todos/:id', function(req, res, next) {
  const index = todos.findIndex(todo => todo.id == req.params.id);
  if (index !== -1) {
    todos.splice(index, 1);
    res.json({ message: '待辦事項已刪除' });
  } else {
    res.status(404).send('找不到待辦事項');
  }
});

module.exports = router;