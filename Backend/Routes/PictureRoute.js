const Picture = require('../Models/PictureModel.js');
const User = require('../Models/UserModel.js')
const express = require('express');


const router = express.Router();

router.get('/:id', async(req,res)=>{
    const id = req.params.id;

    
})

module.exports = router;