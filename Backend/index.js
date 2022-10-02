const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')

const UserRoute = require('./Routes/UserRoute.js')

dotenv.config()

const app = express();



app.listen(process.env.PORT, ()=>{console.log('server is running on 5000')})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(cors({origin:'*'}))
app.use('/user',UserRoute);

mongoose.connect(
    process.env.MONGO_DB, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>console.log('Database connected'))