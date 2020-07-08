const express = require('express');
const app = express();
const cors = require('cors');
const todoListRoutes = require('./routes/todoList');

// no block between front-end, back-end
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/todo-list', todoListRoutes)

app.listen(8000, () => {
    console.log('Server is running at port 8000')
})