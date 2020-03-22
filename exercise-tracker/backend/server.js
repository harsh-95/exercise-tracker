const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require('../backend/routes/users');
const exerciseRoutes = require('../backend/routes/exercises');

const app = express();

require('dotenv').config();
app.set('port', 3000);

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri).then(
        ()=>{
            console.log('mongodb successfully connected');
        }
    ).catch(
        (err)=>{
            console.log('unable to connect');
            console.error(err);
        }
    )

const server = http.createServer(app);

app.get('/', (req,res,next)=>{
    res.status(200).json({
        message: 'demo response'
    });
})

app.use('/exercises', exerciseRoutes);
app.use('/users', userRoutes);

server.listen(3000);