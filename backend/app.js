const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Task = require('./models/task');
const app = express();

mongoose.connect("mongodb://localhost:27017/mean-todo-list", {useNewUrlParser: true}).then(() => {
    console.log('Connected successfully');
}).catch(() => {
    console.log('connection failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.post("/api/tasks", (req, res, next) => {
    const todoItem = new Task({
        todoItem: req.body.newItem
    });
    todoItem.save().then(createTask => {
        console.log(createdTask);
        console.log(task);
     res.status(201).json({
         message: 'Task created successfully',
         taskId: createTask._id
     });   
    });
});

app.get("/api/tasks", (req, res, next) => {
    Task.find().then(documents => {
        console.log(documents);
        res.status(200).json({
            message: 'task items fetched successfully',
            tasks: documents
        });
    });
});

app.delete("/api/tasks/:id", (req, res, next) => {
    Task.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({message: 'Task Deleted!'});
    });
    console.log(req.params.id);
});




module.exports = app;