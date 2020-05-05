const express = require('express');// using express

const router = express.Router();

// importing controller from controller action
const studentController = require('../controllers/student_controller');

// importing model from modeld
const Student = require('../models/student');

// routes
router.get('/list',(req,res) => {
   Student.find({},(err,students) => {
       if(err){
           console.log('error');
           return;
       }

       return res.render('student_list',{
           student_list : students
       })
   })
})
router.post('/add-details',studentController.addDetails);

module.exports = router; // exporting router