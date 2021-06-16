const users = require("../data/users.json");

module.exports = {
    loginMiddleware(req,res,next){
        const  { email,password } = req.body;
        const user = users.find(user => user.email === email && user.password === password);
        if(!user)
            return res.render("session/loginForm",{
                error:"Usuário não encontrado.",
                email
            })
        req.session.user = user.id;
        next()
    },
    isLogged(req,res,next){
        if(!req.session.user)
            return res.redirect("/login");

        next();
    },
    onlyVisitors(req,res,next){
        if(req.session.user)
            return res.redirect("/");
        next();
    }   
}

