const express = require('express');
const { Product, Comment } = require('./models/index');
const db = require('./db.js');
const productController = require('./controllers/productController');
const commentController = require('./controllers/commentController');
const productRoutes = require("./views/productRoutes");
const authRoutes = require("./views/authRoutes");
const app = express();
const PORT = process.env.PORT || 4000;

require('dotenv').config();

app.use(express.json());
app.use(productRoutes);
app.use(authRoutes);

//CRUD products

app.post('/products', productController.createProduct);
app.get('/products', productController.findAllProducts);
app.get('/products/:id', productController.findProductById);
app.delete('/products/:id', productController.deleteProductById);
app.put('/products/:id', productController.putProductById);

// CRUD comments

app.post('/comments', commentController.createComment);
app.get('/comments/:id', commentController.getCommentById);
app.delete('/comments/:id', commentController.deleteCommentById);
app.put('/comments/:id', commentController.putCommentById);


db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));   
