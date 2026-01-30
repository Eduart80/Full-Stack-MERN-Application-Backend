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

module.exports = {
    createTask
}