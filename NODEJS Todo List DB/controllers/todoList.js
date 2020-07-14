const db = require('../models')

const getTodoList = async (req, res) => {
    const todoList = await db.todoList.findAll();
    res.status(200).send(todoList);
};

const createTodoList = async (req, res) => {
    const newTodo = await db.todoList.create({
        task: req.body.task
    })
    res.status(201).send(newTodo);
};

const updateTodoList = async (req, res) => {
    const targetId = String(req.params.id);
    const newTask = req.body.task;
    await db.todoList.update({
        task: newTask
    }, {
        where: {id: targetId}
    })
    res.status(200).send({message: "Updating is success"});
};

const deleteTodoList = async (req, res) => {
    const targetId = String(req.params.id);
    await db.todoList.destroy({
        where: {
            id: targetId
        }
    })
    res.status(204).send();
};

module.exports = {
    createTodoList,
    getTodoList,
    updateTodoList,
    deleteTodoList
}