//PORT

const PORT = 3000;

//Express and path and apiroute
const express = require('express');

const path = require('path')

const apiRoute = require('./routes/api')


//shorten command
const app = express();

//coding
app.use("/api", apiRoute);

app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, ()=>{
    console.log("server running on port", PORT)
    });




