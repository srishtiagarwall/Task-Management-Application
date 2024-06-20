const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const tasksApp = require("./models/taskManagement")

var app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1/taskManagement")
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.error("MongoDB connection error:", error));


// Check for database connection errors
mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});

// Get saved tasks from the database
app.get("/getTasksList", (req, res) => {
    tasksApp.find({})
        .then((task) => res.json(task))
        .catch((err) => res.json(err))
});

// Add new task to the database
app.post("/addTasksList", (req, res) => {
    tasksApp.create({
        task: req.body.task,
        status: req.body.status,
        deadline: req.body.deadline, 
    })
        .then((task) => res.json(task))
        .catch((err) => res.json(err));
});

// Update task fields (including deadline)
app.post("/updateTasksList/:id", (req, res) => {
    const id = req.params.id;
    const updateData = {
        task: req.body.task,
        status: req.body.status,
        deadline: req.body.deadline, 
    };
    tasksApp.findByIdAndUpdate(id, updateData)
        .then((task) => res.json(task))
        .catch((err) => res.json(err));
});

// Delete task from the database
app.delete("/deleteTasksList/:id", (req, res) => {
    const id = req.params.id;
    tasksApp.findByIdAndDelete({ _id: id })
        .then((task) => res.json(task))
        .catch((err) => res.json(err));
});

app.listen(3001, () => {
    console.log('Server running on 3001');
});
