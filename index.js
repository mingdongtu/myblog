const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users')

// app.get('/',function(req,res){
//        res.send('Oh,my god! I am you ')
// })
// app.get('/users/:name',function(req,res){
//        res.end('hello,' + req.params.name)
// })
app.use('/',indexRouter);
app.use('/users',userRouter);

app.listen(3008)    