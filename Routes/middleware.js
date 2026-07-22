console.log("This is my current server");

const express = require('express');

const app = express();

const port = 5000;

app.use((req , res , next)=>{
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`Request Time: ${new Date().toISOString()}`);
    console.log(`Time now ${Date.now()}`);
    next();
})


app.get('/',(req,res)=>{  

    res.send('<h1>Welcome to the Home Page</h1>')

}
)

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})