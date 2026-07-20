const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('<h1>Welcome to the Blog Page</h1>');
})

router.get('/post',(req,res)=>{
    res.send('<h1>Welcome to the Blog Post Page</h1>');
})

router.get('/post/:slug',(req,res)=>{
    const slug = req.params.slug;
    res.send(`<h1> Welcome to the blog post for ${slug}</h1>`);

})

module.exports = router;