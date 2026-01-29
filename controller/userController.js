const express = require('express')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET
const expiration = "2h"

//create
async function createUser(req,res){
    try{
        const checkUser = await User.findOne({ email: req.body.email })
        if(checkUser){
            return res.status(400)
            .json({ message: "User email or password already exist" })
        }
        const newUser = new User(req.body)
        await newUser.save()
        res.status(201).json({ success: true, data: newUser })
    }catch(err){
        console.log("Error creating user", err.message);
        res.status(400).json({ success: false, message: err.message });
    }
}
//login
async function loginUser(req,res){
    try {
        const user = await User.findOne({ email: req.body.email });
        
        if (!user) {
            return res.status(400).json({ message: "Incorrect email or password" });
        }
        
        const correctPw = await user.isCorrectPassword(req.body.password);
        
        if (!correctPw) {
            return res.status(400).json({ message: "Incorrect email or password" });
        }
        const payload = { username: user.username, email: user.email, _id: user._id };
        const token = jwt.sign({ data: payload }, secret, { expiresIn: expiration });
        res.status(200).json({ 
            success: true, 
            message: "Login successful", 
            token,
            user: { 
                username: user.username, 
                email: user.email 
            } 
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }

}
//log out
async function logOutUser(req,res){

}

module.exports ={
    createUser,
    loginUser,
    logOutUser
}


