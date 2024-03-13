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
            return res.json({ message: "User doesn't exist!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id }, "abd");
        res.json({ message: 'Authentication successful', user, token });

    } catch (error) {
        console.error('Error signing in:', error);
        res.json({ message: 'Internal server error' });
    }
});

module.exports = router;
