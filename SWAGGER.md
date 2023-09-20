
## 安裝與設置 Swagger API 於 Express.js 專案

### 1. 安裝必要的 npm 套件

首先，你需要安裝 `swagger-jsdoc` 和 `swagger-ui-express`。

```bash
npm install swagger-jsdoc swagger-ui-express
```

### 2. 設置 Swagger 定義和選項

在你的主要應用程式文件（例如 `app.js`）中，導入所需的模組並設置 Swagger。

```javascript
const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// Swagger 定義
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A sample Express API with Swagger documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  // 路徑到API路由文件
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(swaggerOptions);
```

### 3. 使用 Swagger UI

使用 `swagger-ui-express` 來提供 Swagger 的 UI 和文檔。

```javascript
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
```

這行代碼將 Swagger UI 設置在 `/api-docs` 路徑。

### 4. 為你的路由添加 JSDoc 註解

在你的路由文件中（例如 `./routes/todos.js`），使用 JSDoc 註解來描述你的 API。這將允許 `swagger-jsdoc` 從註解中生成 Swagger 定義。

例如：

```javascript
/**
 * @swagger
 * /todos:
 *   get:
 *     description: 獲取所有待辦事項
 *     responses:
 *       200:
 *         description: 成功
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
  // Your code here
});
```

### 5. 啟動你的應用程式

啟動你的 Express 應用程式，然後在瀏覽器中訪問 `http://localhost:3000/api-docs` 來查看和使用 Swagger UI。

