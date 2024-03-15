const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');

const jwt = require("jsonwebtoken");

router.post("/signin", async(req, res) => {

    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User doesn't exist!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id }, "abd");
        res.status(200).json({ message: 'Authentication successful', user, token });

    } catch (error) {
        console.error('Error signing in:', error);
        res.status(400).json({ message: 'Internal server error' });
    }
});

module.exports = router;
