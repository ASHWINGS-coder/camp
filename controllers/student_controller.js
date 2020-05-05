const Student = require('../models/student')

// add a student 
module.exports.addDetails = function(req,res){
    let studentid = req.body.id;
    
    Student.findById({id:studentid},(err,student) => {
        if(!student){
            Student.create(req.body);
            return res.render('home',{
                student_list:student
            });
        }
    })

}