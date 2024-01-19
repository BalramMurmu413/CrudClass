require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors')

const connectToDb = require('./config/dataBase.js');

connectToDb();

app.use(express.json())
app.use(express.urlencoded({extended : true}))
// app.use(cors())

const userRouter = require('./router/userRouter.js')


app.use('/', userRouter)



module.exports = app;