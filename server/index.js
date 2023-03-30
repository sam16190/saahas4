const express =require("express")
const cors = require("cors");
const mongoose = require("mongoose")
const userRoutes=require("./routes/userRoutes");
const bodyParser = require('body-parser');
const billRoutes = require('./routes/billRoutes');

const app =express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/api/auth",userRoutes)
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    //useUnifiedToplogy:true,
}).then(()=>{
    console.log('DB connection successful');
}).catch((err)=>{
    console.log(err.message);
});
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server started on Port ${process.env.PORT}`);
});