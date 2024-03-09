const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// home route get request 
app.get('/', (req, res)=>{
    res.status(200).json({message : "Server is ready"})
})
// page not found
app.use((req, res, next)=>{
    res.status(404).json({message : "This url is not found"})
}) 
// server error 
app.use((err, req, res, next)=>{
    res.status(500).json({message : "Server somethings broke"})
})


module.exports = app;