const express = require('express');
const fs  = require('fs');
const { stringify } = require('querystring');  
const app= express();
const port =3000;
const path = require('path');
const cors= require('cors');
app.use(cors());

bounds = []

//app.use(bodyParser.json());
    // "cos",
    // "ramp",
    // "step",
    // "sgn",
    // "pow",
    // "pi",
    // "abs",
    // "periodic",
    // 'sum',
    // 'product'
    

function sin(t)
{

}
function exp(t)
{

}

function sinc(t)
{

}
function impulse(t)
{

}
function cos(t)
{

}
function ramp(t)
{

}
function step(t)
{

}
function sgn(t)
{

}

function pow(x, y)
{

}
function abs(x)
{

}
function sum(expr, lim=(i, n1, n2))
{

}
function product(expr, lim=(i, n1, n2))
{

}

function periodic(expr)



app.post("/string",(req,res)=>{
    
       const  NewExpression = req.body.expression;


       fs.readFile("string.json","utf-8",(err,data)=>{
 
        if(err) 
        {
            throw err;
        }

        const expression = JSON.parse(data);
        expression.push(NewExpression);
        fs.writeFile("string.json",JSON.stringify(expression),(err)=>{
        if(err) throw err;
        res.status(201).json(NewExpression);
        })
        
    })

})
