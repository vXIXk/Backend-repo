const express = require("express");
const {
    tasksController: {
        getAllTasks,
        getTask,
        createTask,
        updateTask,
        deleteTask,
    },
} = require("./controllers");
const {
    validation: { validateTask },
    errorHandlers: { validationErrorHandler, errorHandler },
} = require("./middleware");

const app = express();
app.use(express.json());

app.get("/tasks/", getAllTasks);
app.get("/tasks/:id", getTask);
app.post("/tasks/", validateTask, createTask);
app.patch("/tasks/:id", validateTask, updateTask);
app.delete("/tasks/:id", deleteTask);

app.use(validationErrorHandler, errorHandler);

module.exports = app;
