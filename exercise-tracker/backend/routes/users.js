const express = require('express');
const router = express.Router();
const User = require('../models/usermodel');

router.get('/', (req,res,next)=>{
    User.find().then(
        (users)=>{
            res.status(200).json(users);
        }
    ).catch(
        (error)=>{
            res.status(400).json({
                error: error
            })
        }
    )
});

router.post('/add', (req,res,next)=>{
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save().then(
        ()=>{
            res.status(200).json({
                message: 'User added successfully'
            })   
        }
    ).catch(
        (error)=>{
            res.status(400).json({
                error: error
            })
        }
    )
});

module.exports = router;