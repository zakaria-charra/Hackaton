const mongoose = require('mongoose')

const pictureSchema = mongoose.Schema({
    pictureURL:{
        type:String,
        required: true,
    },

    desc:{
        type:String,
        required:true
    }
}, {timestamp:true})

const pictureModel = mongoose.model('picture',pictureSchema);


module.exports ={pictureSchema, pictureModel};