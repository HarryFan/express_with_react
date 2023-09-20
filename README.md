# express-with-react

這個專案是一個使用 Express.js 和 React.js（包含 Vue2 和 Vue3 版本）的待辦事項應用程式。

## 使用方法

1. 安裝相依套件：

   ```bash
   npm install
   ```

2. 啟動後端伺服器和前端應用程式：

   ```bash
   npm start
   ```

3. 在瀏覽器中訪問以下網址：

   - React 的待辦事項清單：[localhost:3000](http://localhost:3000)
   - Vue2 的待辦事項清單：[localhost:3000/vue2.html](http://localhost:3000/vue2.html)
   - Vue3 的待辦事項清單：[localhost:3000/vue3.html](http://localhost:3000/vue3.html)


## Swagger API 文檔

你可以在瀏覽器中訪問 [localhost:3000/api-docs](http://localhost:3000/api-docs) 來查看 Swagger 的 API 文檔，以瞭解後端路由的更多詳細資訊。

## 後端

後端使用 Express.js 框架。待辦事項存儲在記憶體中，在伺服器運行期間保持不變。

### 路由

- `GET /todos`：回傳所有待辦事項。
- `POST /todos`：建立一個新的待辦事項。待辦事項的文字是在請求主體中傳送的。
- `PUT /todos/:id`：更新指定 ID 的待辦事項。新的待辦事項文字是在請求主體中傳送的。
- `DELETE /todos/:id`：刪除指定 ID 的待辦事項。

## 前端

前端包含 React.js（主要版本）、Vue2 和 Vue3 版本的待辦事項應用程式。以下是各個版本的說明：

### React.js 版本

- `index.html`：瀏覽 React 版本的待辦事項清單，支援新增、編輯和刪除待辦事項。

### Vue2 版本

- `vue2.html`：瀏覽 Vue2 版本的待辦事項清單，支援新增、編輯和刪除待辦事項。

### Vue3 版本

- `vue3.html`：瀏覽 Vue3 版本的待辦事項清單，支援新增、編輯和刪除待辦事項。

每個版本的待辦事項清單都可以進行相同的操作，包括新增、編輯和刪除待辦事項。

## 注意事項

- 請確保在使用應用程式之前已安裝 Node.js 和 npm。
- 使用應用程式前，請確保後端伺服器已成功啟動。
- 在瀏覽器中訪問相應的網址以查看不同版本的待辦事項清單。

