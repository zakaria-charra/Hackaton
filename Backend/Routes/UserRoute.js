const User = require('../Models/UserModel.js')
const express = require('express');

const router = express.Router();

//get all users
router.get('/', async(req,res)=>{
    
    try
    {
        const users = await User.find({});
        res.header('Access-Control-Allow-Origin','*');
        res.status(200).json(users);
    }catch(err)
    {
        res.status(400).json({message:err})
    }
})


//get a specific user
router.get('/:id', async(req,res)=>{
    const id = req.params.id;

    try{
        const user = await User.findById(id);
        res.status(200).json(user);
    }catch(err)
    {
        res.status(404).json("not found")
    }
})


//add a new user
router.post('/add',async(req,res)=>{

    const name = req.body.name;
    const age = req.body.age;

    try{
        const newUser = await new User({
            name:name,
            age:age
        })

        const savedUser = await newUser.save();
        res.status(200).json("user created successfully")

    }catch(err)
    {
        res.status(400).json("operation failed")
    }
})


//update user's pictures description
router.put('/:id',async (req,res)=>{
    
    const id = await req.params.id;
    const pictureURL = await req.body.picturURL;
    const desc = await req.body.desc;


    /*
    array of objects
    each object consists of pictureId and desc
    */

    try{
        
        const user = await findByIdAndUpdate(id,{pictures: savedPic});
        res.status(200).json(user);
    }catch(err)
    {
        res.status(402).json("invalid operation");
    }
    
})



module.exports = router;