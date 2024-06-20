const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
    },
});


const taskManagement = mongoose.model("tasks", todoSchema);

module.exports = taskManagement;
