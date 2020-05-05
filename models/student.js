const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    dsascore:{
        type:String,
        required:true
    },
    webscore:{
        type:String,
        required:true
    },
    reactscore:{
        type:String,
        required:true
    },
    interviewdate:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    result:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;