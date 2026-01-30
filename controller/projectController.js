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
async function updateProject(req,res){

}
async function deleteProject(req,res){

}

module.exports = {
    getAllProjects,
    getOneProject,
    createOneProject,
    updateProject,
    deleteProject
}