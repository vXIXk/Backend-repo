const createError = require("http-errors");
const { task } = require("./../model");

module.exports.getAllTasks = (req, res) => {
    const {
        query: { page, results },
    } = req;

    const gotTasks = task.getAllTasks(page, results);
    res.status(200).send(gotTasks);
};

module.exports.getTask = (req, res, next) => {
    const {
        params: { id },
    } = req;

    const gotTask = task.getTask(id);
    gotTask
        ? res.status(200).send(gotTask)
        : next(createError(404, "Element not found"));
};

module.exports.createTask = (req, res) => {
    const { body } = req;

    const createdTask = task.createTask(body);
    res.status(201).send(createdTask);
};

module.exports.updateTask = (req, res, next) => {
    const {
        params: { id },
        body,
    } = req;

    const updatedTask = task.updateTask(id, body);
    updatedTask
        ? res.status(200).send(updatedTask)
        : next(createError(404, "Element not found"));
};

module.exports.deleteTask = (req, res, next) => {
    const {
        params: { id },
    } = req;

    const deletedTask = task.deleteTask(id);
    deletedTask
        ? res.status(204).send()
        : next(createError(404, "Element not found"));
};
