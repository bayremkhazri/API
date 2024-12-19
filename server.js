const express=require('express');
const app=express();
// njib fel port mel .env
require('dotenv').config();
PORT=process.env.port;
 // bsh n3ayet lel function mta3 cnx base de donné
const connetDB=require("./config/connectDB");
connetDB();
// bsh ynajm yefhem el router eli khdemt,hom
app.use(express.json());

// bsh n3ayet lel router mta3 contact
app.use('/api/contact',require('./Routes/contact'))

app.use('/api/user',require("./Routes/user"))


// amlet server 
app.listen(PORT,err =>{
    err ? console.log(`server ma mchech ${PORT}`) :

    console.log(`server yemshi ${PORT}`)
} )




