const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const userRoute = require("../routes/userRoute");
const signinRoute = require("../routes/signinRoute")

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());



app.use(userRoute);
app.use(signinRoute)

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server started on port ${PORT}`)
});
