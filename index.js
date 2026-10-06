const express=require('express');

const app=express();

app.get('/home',(req,res) =>{
    res.json({message:'OKK'});
})

app.listen(3000,() =>{
    console.log('Start the Server');
})