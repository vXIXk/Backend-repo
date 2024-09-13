const { v4: uuidv4 } = require("uuid");

const tasksArr = [
    { id: uuidv4(), body: "Check emails", isDone: false },
    { id: uuidv4(), body: "Water the plants", isDone: false },
    { id: uuidv4(), body: "Exercise outside for 30 minutes", isDone: false },
    { id: uuidv4(), body: "Take trash out", isDone: false },
    { id: uuidv4(), body: "Organize the desk", isDone: false },
    { id: uuidv4(), body: "Update the calendar", isDone: false },
    { id: uuidv4(), body: "Review budget", isDone: false },
    { id: uuidv4(), body: "Draft project proposal", isDone: false },
    { id: uuidv4(), body: "Freshen up the house", isDone: false },
    { id: "10", body: "Buy vitamins", isDone: false },
];

class Tasks {
    constructor(arr) {
        this.tasksArr = [...arr];
    }

    getAllTasks(page, results) {
        return [...this.tasksArr.slice((page - 1) * results, page * results)];
    }

    getTask(id) {
        const index = this.tasksArr.findIndex(t => t.id === id);
        return index === -1 ? null : this.tasksArr[index];
    }

    createTask(createdTask) {
        this.tasksArr.push({ ...createdTask, id: uuidv4(), isDone: false });
        return this.tasksArr[this.tasksArr.length - 1];
    }

    updateTask(id, values) {
        const index = this.tasksArr.findIndex(t => t.id === id);
        if (index !== -1) {
            this.tasksArr[index] = {
                ...this.tasksArr[index],
                ...values,
            };
        }
        return index === -1 ? null : this.tasksArr[index];
    }

    deleteTask(id) {
        const index = this.tasksArr.findIndex(t => t.id === id);
        return index === -1 ? null : this.tasksArr.splice(index, 1);
    }
}

const tasksInstance = new Tasks(tasksArr);

module.exports = tasksInstance;
