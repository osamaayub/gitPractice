import express from "express";

import  "dotenv/config" ;

//make an express application
const app=express();





const PORT=process.env.PORT ||8000;
app.listen(PORT,()=>{
  console.log(`server is running on http://localhost:${PORT}`);
})