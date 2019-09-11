const express=require('express');
const app=express();

app.post('/getMovies',(req,res)=>{
    console.log(req);
    res.send({'test':'test'});
});

app.listen(process.env.PORT);