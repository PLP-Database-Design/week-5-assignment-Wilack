// import some dependencies

 //http framework for handling requests
 const express = require('express');
 const app = express();
 // dbms MYsql
 const mysql = require('mysql2'); 
// cros origin Resource sharing
 const cors = require('cors');
 // environment variable doc
 const dotenv = require('dotenv');
  
 app.use(express.json());
 app.use(cors());
 dotenv.config();

 //connection to the database
const db =mysql.createConnection({
     host: process.env.DB_HOST,
     user: process.env.DB_USERNAME,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME
});

//check if there's a connection
db.connect((err) =>{
    //if no connection
    if(err) return console.log("error connecting to mysql");

    //if no error
    console.log("connected to my sql as id: ",db.threadId);
})
  // <your code goes here
  //
  //
  //< upto \

  //start server
  app.listen(process.env.PORT,()=>{
    console.log(`server listening on port ${process.env.PORT}`);
  

  //sening a message to the browser
  console.log('sending message to the broswer...');
  app.get('/', (req,res) => {
    res.send('server started succesfully!');
    })

});