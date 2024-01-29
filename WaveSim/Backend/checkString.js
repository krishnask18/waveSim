const express = require('express');
const fs  = require('fs');
const { stringify } = require('querystring');  
const app= express();
const port =3000;
const path = require('path');
const cors= require('cors');
app.use(cors());
//app.use(bodyParser.json());


app.post("/string",(req,res)=>{
     
})
