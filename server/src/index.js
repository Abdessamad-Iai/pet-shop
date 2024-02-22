const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const UserModel = require("../models/Users");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@pets.jgad3mp.mongodb.net/petshop`)


// get Users
app.get("/", async(req, res)=>{
    const users = await UserModel.find();
    res.json(users)
})

// create User
app.post("/createUser", async(req, res) =>{
    const user = req.body;
    const newUser = new UserModel(user);
    // const user = await UserModel.create({...req.body})
    await newUser.save();
    
    res.json(user)
})


app.listen(process.env.MONGODB_PORT, () => console.log("SERVER STARTED"));