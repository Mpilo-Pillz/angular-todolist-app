const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    todoItem: { type: String, required: true },
});

module.exports = mongoose.model('Task', taskSchema);