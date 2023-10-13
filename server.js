const express = require("express");
const app = express ();
const PORT = 6301
app.use(express.json())

let users = [
    {
        name : "habiba" ,
        email : "habiba@gmail.com" ,
        id : 1
    } ,
    {
        name : "firas" ,
        email : "firas@gmail.com",
        id : 2

    }
]
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });



app.listen(PORT, (err) => {
    err ? console.log(err):
    console.log(`Server is running on port ${PORT}`);
  } )