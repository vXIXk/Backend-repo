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

const app = express();
app.use(express.json());

app.get("/tasks/", getAllTasks);
app.get("/tasks/:id", getTask);
app.post("/tasks/", createTask);
app.patch("/tasks/:id", updateTask);
app.delete("/tasks/:id", deleteTask);

module.exports = app;
