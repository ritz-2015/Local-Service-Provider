const express = require('express');
const app=express();
const cors = require('cors');//to allow cross-origin requests

app.use(express.json()); //to parse json data from the request body 
app.use(cors());

const db=require('./models');

//Routers
const postRouter=require("./routes/users");
app.use("/users",postRouter);

db.sequelize.sync().then(()=>{    //create all the tables
    //whenever we run server it starts from here
    app.listen(3001,()=>{              
    console.log("Server running on port 3001")
    });
});

