require("dotenv").config();
const express = require("express");
const connect_db = require("./config/db.js");

const app = express();
app.use(express.json());

connect_db();

app.get("/", (req,res) => {
    res.send("Server is running");
})

app.use("/api/auth", require("./routes/auth.js"));

PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on Port - ${PORT}`)
})