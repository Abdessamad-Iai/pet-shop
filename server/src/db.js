const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    try {
        //mongodb+srv://Abdessamad:<password>@pets.jgad3mp.mongodb.net/?retryWrites=true&w=majority&appName=pets
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@pets.jgad3mp.mongodb.net/petshop?retryWrites=true&w=majority`);
        console.log("Database connected");
    } catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
