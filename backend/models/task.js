const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    todoItem: { type: String, required: false },
});

module.exports = mongoose.model('Task', taskSchema);