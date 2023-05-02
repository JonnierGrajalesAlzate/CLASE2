//EJERCICIOS

const express = require('express');
const req = require('express/lib/request');
const  app = express();


app.get('/suma',(req,res)=>{
    res.send('El resultado de la suma es: 2 + 2 = 4')
    console.log(req.params)
})

app.get('/resta',(req,res)=>{
    res.send('El resultado de la resta es: 12 - 22 = -10')
    console.log(req.params)
})

app.get('/division',(req,res)=>{
    res.send('El resultado de la división es: 12/2 = 6')
    console.log(req.params)
})


app.get('/tabla5',(req,res)=>{
    res.send('5*0= 0 | 5*1=5 | 5*2=10 | 5*3=15 | 5*4=20 | 5*5=25 | 5*6=30 | 5*7=35 | 5*8=40 | 5*9=45 | 5*10=50')
    console.log(req.params)
})


app.get('/Usuario/:cedula', function (req, res){
    res.send('Cédula del usuario enviado con exito')
    console.log(req.params)
})


app.listen(3000,()=>{
    console.log('Server Started')
})


