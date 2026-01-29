require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Server is working.")
})

const connect_db = require("./config/db.js");
connect_db();

PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on Port - ${PORT}`)
})