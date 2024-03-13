const express = require("express");
const bcrypt = require('bcrypt');
const UserModel = require("../models/UserModel");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post("/createUser", async (req, res) => {

    try {
        const { firstName, lastName, address, email, password } = req.body;
        const user = await UserModel.findOne({email});
        if (user) {
            return res.json({message: "User already exists! "});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            firstName,
            lastName,
            address,
            email,
            password: hashedPassword
        });
        res.json({newUser})
        await newUser.save();
    } catch (error) {
        console.error('Error creating user:', error);
    }
});

module.exports = router;
