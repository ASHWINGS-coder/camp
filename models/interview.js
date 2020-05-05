const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;