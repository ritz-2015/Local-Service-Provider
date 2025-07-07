const express= require('express')
const router=express.Router()
const {users}=require('../models') //{users} is the name of js file in the models folder

router.get('/', (req, res) => {
  res.send('Users route is working');
}); 

router.post('/',async(req,res)=>{
  const post=req.body;  //post var consits of the 'post' body 
  await users.create(post);  //insert into the db
  res.json(post);  //send back the same data as response 
})


module.exports=router;