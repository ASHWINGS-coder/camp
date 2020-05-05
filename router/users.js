const express = require('express');// using express
const router = express.Router();

// importing user controller
const userController = require('../controllers/user_controller');

// route actions
router.get('/home',function(req,res){
    return res.render('home');
})

router.get('/sign-up',userController.Signup);
router.get('/sign-in',userController.Signin);
router.post('/create',userController.create);
router.post('/create-session',userController.createSession);

module.exports = router; // exporting router