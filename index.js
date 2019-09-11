const express=require('express');
const app=express();

app.post('/getMovies',(req,res)=>{
    res.send({'test':'test'});
});

app.listen(process.env.PORT);