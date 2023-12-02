const express=require('express')
const path=require('path')

const app=express();

app.use(express.urlencoded({extended:true}))

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static('css'));
app.use(express.static('webfonts'));
app.use(express.static('images'));
app.use(express.static('vendor'));
app.use(express.static('uploads'));
app.use(express.static('js'));
app.use(express.static('mail'));
app.use(express.static('img'));

app.get('/',function(req,res)
{
    res.render('index'); 
})

app.get('/blog',function(req,res)
{
    res.render('blog1'); 
})

app.get('/blog2',function(req,res)
{
    res.render('blog2'); 
})


app.get('/post',function(req,res)
{
    res.render('post'); 
})

app.get('/contact',function(req,res)
{
    res.render('contact'); 
})

app.get('/portfolio_overall',function(req,res)
{
    res.render('portfolio-item'); 
})

app.get('/portfolio',function(req,res)
{
    res.render('portfolio-item'); 
})

app.get('/portfolio2',function(req,res)
{
    res.render('portfolio2'); 
})

app.get('/faq',function(req,res)
{
    res.render('faq'); 
})


app.get('/services',function(req,res)
{
    res.render('services'); 
})

app.get('/about',function(req,res)
{
    res.render('about'); 
})

app.get('/pricing',function(req,res)
{
    res.render('pricing'); 
})

app.use(function(req,res)
{
    res.render("404");
})



app.listen(500)