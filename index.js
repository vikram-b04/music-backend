const express = require('express');
const app = express();
const path = require('path');   
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://1:1@cluster0.bdi3zk0.mongodb.net/musicschooldatabase",{}).then(()=>{
    console.log("Database connected");
})

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set('view engine','ejs');
app.use('/',require('./server/routes/routes'));

app.use(express.static("public"));

app.listen(10000,()=>{
    console.log("Server is running on port 10000");
})