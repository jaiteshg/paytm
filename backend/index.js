const express = require("express");
const cors = require("cors");

const app = express();

const rootRouter = require ("./routes/index.js");

app.use(cors());

app.use(express.json());

app.use("/api/v1" , rootRouter);

app.listen(3000 , (req, res) =>{
    console.log("server is running on port 3000");
});