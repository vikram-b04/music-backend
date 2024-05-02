const modelfilecalling = require('../model/model');

exports.create = (req,res)=>{
    let check = new modelfilecalling({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        phonenumber : req.body.phonenumber,
        email : req.body.email,
        message : req.body.message
    })

    check.save().then((dd)=>{
        console.log(dd);
        res.redirect('/details');
    })
}

exports.find = (req,res)=>{
    modelfilecalling.find().then((aa)=>{
        console.log(aa);
        res.send(aa);
    })
}