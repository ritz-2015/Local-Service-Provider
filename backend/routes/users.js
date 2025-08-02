const express= require('express')
const router=express.Router()
const {Users}=require('../models') //{Users} is the name of js file in the models folder,but it is imported as Users because of naming convention in sequelize

router.get('/', async(req, res) => {
  const listOfUsers = await Users.findAll(); //findAll() is a sequelize method to get all the data from the table
  res.json(listOfUsers); //send the data as json response
}); 

router.post('/',async(req,res)=>{
  const post=req.body;  //post var consits of the 'post' body 
  await Users.create(post);  //insert into the db
  res.json(post);  //send back the same data as response 
})


module.exports=router;