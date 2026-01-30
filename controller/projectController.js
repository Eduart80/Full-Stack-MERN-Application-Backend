const express = require('express')
const Project = require('../models/Project')


// get all
async function getAllProjects(req,res){
    try{
        const projects = await Project.find({user: req.user._id})
        if(!projects){
            return res.status(404).json({ error: "Products not found" })
        }
        res.json(projects)
    }catch(error){
         res.status(500).json({ message: error.message });
    }
}
async function getOneProject(req,res){

}
async function createOneProject(req,res){

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