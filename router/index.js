const express = require('express');// using express

const router = express.Router();

// route actions 
router.get('/',(req,res) => {
    return res.render("index")
})
router.use('/users',require('./users'));
router.use('/students',require('./students.js'))
router.use('/interview',require('./interview'))

module.exports = router; // exporting router