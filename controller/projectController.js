const express = require('express')
const Project = require('../models/Project')


// GET all
async function getAllProjects(req,res){
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "User not authenticated" });
        }
        const projects = await Project.find({ user: req.user._id });
        if (!projects) {
            return res.status(404).json({ error: "Projects not found" });
        }
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//GET one
async function getOneProject(req,res){
    try{
        const project = await Project.findOne({_id:req.params.id, user:req.user._id})
       if(!project){
        return res.status(404).json({message: "Project not found"})
       }
//TO DO
// need to find tasks attached to this project id
        res.json(project)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}
// POST
async function createOneProject(req,res){
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "User not authenticated" });
        }
        const { name, description, status, startDate, endDate } = req.body;
        const newProject = new Project({
            user: req.user._id,
            name,
            description,
            status,
            startDate,
            endDate
        });
        await newProject.save();
        res.status(201).json(newProject)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
//PUT
async function updateProject(req,res){
    const project = await Project.findOne({_id:req.params.id, user:req.user._id})
       if(!project){
        return res.status(404).json({message: "Project not found"})
       }
// todo
//refactor the fields if() , make it dinamic
    const { name, description, status, startDate, endDate } = req.body;
    
    if(name !== undefined) project.name = name
    if(description !== undefined) project.description = description
    if(status !== undefined) project.status = status
    if(startDate !== undefined) project.startDate = startDate
    if(endDate !== undefined) project.endDate = endDate
    
    try{
        await project.save()
        res.json(project)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}
//Delete
async function deleteProject(req,res){
    try{
        const project = await Project.findOne({_id:req.params.id, user:req.user._id})
       if(!project){
        return res.status(404).json({message: "Project not found"})
       }
//TO DO
// delete all taskes conecting to this project
       await project.deleteOne()
       res.json({message: "Project deleted"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getAllProjects,
    getOneProject,
    createOneProject,
    updateProject,
    deleteProject
}