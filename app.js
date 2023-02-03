const express = require('express');

const app = express();

app.get("/", (req, res)=>{
 res.send("Hello world v1");
});

app.listen(3000, ()=>console.log("App running at port 3000"));
