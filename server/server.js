/**
 * Created by Allen on 2018/4/9.
 */
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const utils = require('utility')

//新建app
const app = express();

app.use(cookieParser());
//处理post参数
app.use(bodyParser.json());

app.use('/user', userRouter)
app.get('/', function (req, res) {
   res.send('<h1>Hello world</h1>');
});

// app.post('/register',function (req,res) {
//     console.log(req.body)
// })

app.listen(9093,function () {
    console.log('Node app start at 9093')    
})