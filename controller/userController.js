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


module.exports ={
    createUser
}


