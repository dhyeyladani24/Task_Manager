const Task = require('../models/tasks')
const getAllTaks = (req,res) => {
    res.send(' gett all taks');
}

const createTask = async(req,res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
}

const getTask = (req,res) => {
    res.json({id:req.params.id});
}

const updateTask = (req,res) => {
    res.send('update task');
}

const deleteTask = (req,res) => {
    res.send('delete task');
}


module.exports = {
    getAllTaks,deleteTask,updateTask,getTask,createTask
}