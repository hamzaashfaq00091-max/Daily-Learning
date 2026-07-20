const express=require('express');
const blog=require('./routes/blog');
const shop=require('./routes/shop');


const app=express();

app.use('/blog',blog);
app.use('/shop',shop);
const port = 3000;


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})