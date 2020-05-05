const express = require('express');// using express

const router = express.Router();

// importing controller from controller action
const interviewController = require('../controllers/interview_controller')

// importing model 
const Interview = require('../models/interview');

// route actions 

router.get('/details',function(req,res){
    Interview.find({},(err,interview) => {
        if(err){
            console.log('Error');
        }
        return res.render('interview',{
            interview_list:interview
        });
    })
})

router.post('/addinterview',interviewController.addInterview);

module.exports = router; // exporting router