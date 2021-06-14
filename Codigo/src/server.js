const express = require('express');
const nunjucks = require('nunjucks');
const session = require("./config/session");
const methodOverride = require("method-override");
const routes = require('./routes');

const app = express();
app.use(session);
app.use((req,res,next) => {
    res.locals.session = req.session;
    next();
});
app.use(express.urlencoded({extended:true}));
app.use(express.static('public/'));
app.use(methodOverride('_method'));
app.use(routes);

app.set('view engine', 'njk');

nunjucks.configure('src/app/views',{
    express:app,
    autoescape:false,
    noCache:true
});

app.listen(4000,() => {
    console.log("Server is running...");
})