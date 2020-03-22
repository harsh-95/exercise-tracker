const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercisemodel');

router.get('/', (req,res,next)=>{
    Exercise.find().then(
        (exercises)=>{
            res.status(200).json(exercises);
        }
    ).catch(
        (error)=>{
            error: error
        }
    )
});

router.post('/add', (req,res,next)=>{
    const newExercise = new Exercise({
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date)
    });
    newExercise.save().then(
        ()=>{
            res.status(200).json({
                message: 'Exercise saved'
            })
        }
    ).catch(
        (error)=>{
            error: error
        }
    )
});

router.get('/:id', (req,res,next)=>{
    Exercise.findOne({_id: req.params.id}).then(
        (exercise)=>{
            res.status(200).json(exercise);
        }
    ).catch(
        (error)=>{
            res.status(400).json({
                error: error
            })
        }
    )
})

router.delete('/:id', (req,res,next)=>{
    Exercise.deleteOne({_id: req.params.id}).then(
        ()=>{
            res.status(200).json({
                message: 'Exercise deleted successfully'
            })
        }
    ).catch(
        (error)=>{
            res.status(400).json({
                error: error
            })
        }
    )
})

router.post('/update/:id', (req,res,next)=>{
    const updatedExercise = {
        _id: req.params.id,
        username: req.body.username,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date
    }

    Exercise.updateOne({_id: req.params.id}, updatedExercise).then(
        ()=>{
            res.status(200).json({
                message: 'Exercise Updated'
            })
        }
    ).catch(
        (error)=>{
            res.status(400).json({
                error: error
            })
        }
    )
})

module.exports = router;