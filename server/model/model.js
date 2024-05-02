const mongodb = require('mongoose');

const mongodbfileds =new mongodb.Schema({
    firstname :{
        type : String,
        required : true
    },

    lastname :{
        type : String,
        required : true
    },
    
    phonenumber :{
        type : String,
        required : true
    },

    email :{
        type : String,
        required : true
    },

    message :{
        type : String,
        required : true
    }
})

const mongodbfiledsexports = mongodb.model("contactforminfo",mongodbfileds);

module.exports = mongodbfiledsexports;