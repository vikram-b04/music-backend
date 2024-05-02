exports.indexfile =(req,res)=>{
    res.render('index')
}

exports.registerfile =(req,res)=>{
    res.render('register')
}

const axios = require('axios');
exports.detailsfile =(req,res)=>{
    axios.get("http://localhost:10000/api/post").then(function (request) {
        res.render('details',{"datapassing":request.data})
    })
    
}
