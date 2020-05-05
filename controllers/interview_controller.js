const Interview = require('../models/interview');

// exporting add controller
module.exports.addInterview = function(req,res){
    console.log(req.body);
    Interview.create(req.body,(err,interview) => {
        if(err){
            console.log('Error ',err);
        }

        return res.redirect('back');
    })
}