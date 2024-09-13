const { task } = require("./../model");

module.exports.getAllTasks = (req, res) => {
    const {
        query: { page, results },
    } = req;

    const gotTasks = task.getAllTasks(page, results);
    res.status(200).send(gotTasks);
};

module.exports.getTask = (req, res) => {
    const {
        params: { id },
    } = req;

    const gotTask = task.getTask(id);
    gotTask
        ? res.status(200).send(gotTask)
        : res.status(404).send(`Element not found`);
};

module.exports.createTask = (req, res) => {
    const { body } = req;

    const createdTask = task.createTask(body);
    res.status(201).send(createdTask);
};

module.exports.updateTask = (req, res) => {
    const {
        params: { id },
        body,
    } = req;

    const updatedTask = task.updateTask(id, body);
    updatedTask
        ? res.status(200).send(updatedTask)
        : res.status(404).send(`Element not found`);
};

module.exports.deleteTask = (req, res) => {
    const {
        params: { id },
    } = req;

    const deletedTask = task.deleteTask(id);
    deletedTask
        ? res.status(204).send()
        : res.status(404).send(`Element not found`);
};
