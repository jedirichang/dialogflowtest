const express=require('express');
const app=express();

app.post('/getMovies',(req,res)=>{
    console.log(req.body,req.query,req.params);
    res.send({'test':'test'});
});

app.listen(process.env.PORT);