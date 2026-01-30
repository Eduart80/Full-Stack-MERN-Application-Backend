const Task = require('../models/Task')

//Post
async function createTask(req,res) {
    if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "User not authenticated" });
        }
    try{
        const { title, description, status } = req.body;
        const projectId = req.params.projectId
        const newTask = new Task({
            user: req.user._id,
            title,
            description,
            status,
            project: projectId
        })
        await newTask.save()
        res.status(201).json(newTask)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
//Get All
async function getAllTasks(req,res){
    try{
        const projectId = req.params.projectId
        const tasks = await Task.find({project:projectId, user:req.user._id})
        res.json(tasks)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
// Get by id
async function getOneTask(req, res) {
    console.log("req.user:", req.user);
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getOneTask
}