import express from 'express'

import dotenv from 'dotenv'

import cors from "cors"
import connection from './database/conn.js'

import Routes from './routes/route.js'

import bodyParser from 'body-parser'



const app=express();

dotenv.config();
app.use(cors())
app.use(express.json());



app.use("/",Routes)
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true}))


const port=process.env.BD_PORT
app.listen(port,()=>{
  console.log(`App is live at port no.${port}` )
})
