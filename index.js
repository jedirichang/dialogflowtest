const express=require('express');
const app=express();

app.get('/getMovies',(req,res)=>{
    res.send({'test':'test'});
});

app.listen(3000);