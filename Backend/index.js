import express from 'express';
import { DBConnect } from './db/database.js';
import dotenv from 'dotenv';
import router from './routes/userRouter.js';


dotenv.config({path: '.env'})
// const DBSTRING = process.env.MONGO_URI
const app = express();

app.get('/', function(req,res){

    res.send("india");
})

app.use(express.json()) //to support json thats why we use it.
// Middleware
app.use("/api/v1",router)

DBConnect();

app.listen(5000,function(req,res){
    console.log("Server running")
})