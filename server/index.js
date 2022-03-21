const express=require('express')
const app = express();
const cors = require('cors');
const dotenv = require('dotenv/config')
const mongoose= require('mongoose');
const friendsRoute=require('./Routes/friends.route.js')

const uri = process.env.MONGO

const PORT=process.env.PORT || 4000;
mongoose.connect(uri).then (()=>{
    console.log('Connected to database')
        
    
        }).catch((err)=>{
            console.error(err);
        
    })
app.use('/',friendsRoute )


app.listen(PORT,()=>{
    console.log(`The server is running at the port ${PORT}`);
} )