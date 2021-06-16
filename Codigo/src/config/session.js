const session = require('express-session')
const FileStore = require('session-file-store')(session);



module.exports = session({
    store: new FileStore({logFn: function(){}}),
    secret:"Asdad@#12%dsa$sADcCSAdwe",
    resave: false,
    saveUninitialized:false,
    cookie:{
        maxAge: 30 * 24 * 60 * 60 * 1000 // ms
    }
})