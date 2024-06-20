const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());
// const dbConfig = require("./config/dbConfig");

// const usersRoute = require("./routes/usersRoute");

app.post("/api/users/register", (req, res)=>{
    console.log(req.body);
    res.send({message: "User registration endpoint"});
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});