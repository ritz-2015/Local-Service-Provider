const express = require('express');
const app=express();
const db=require('./models')

db.sequelize.sync().then(()=>{    //create all the tables
    //whenever we run server it starts from here
    app.listen(3001,()=>{              
    console.log("Server running on port 3001")
    });
});

