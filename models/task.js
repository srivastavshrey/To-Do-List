const mongoose = require('mongoose');
//crating schema
const taskSchema = new mongoose.Schema({
    task:{type:String},
    date:{type:String},
    type:{type:String}
})

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;