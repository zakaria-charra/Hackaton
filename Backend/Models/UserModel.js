const mongoose = require('mongoose')
const {pictureSchema} = require('./PictureModel.js')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
      },
    
    age:{
        type:Number,
        required:true
    },
    pictures:{
        type:[pictureSchema],
    }

},    {timestamp : true})


const userModel = mongoose.model('users', userSchema)

module.exports = userModel;