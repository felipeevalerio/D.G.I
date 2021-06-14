const session = require('express-session')

module.exports = session({

    secret:"iabadabaduuuu",
    resave: false,
    saveUninitialized:false,
    cookie:{
        maxAge: 30 * 24 * 60 * 60 * 1000 // ms
    }
})