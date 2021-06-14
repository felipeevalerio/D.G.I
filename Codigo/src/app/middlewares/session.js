const { users } = require("../data/users"); 


module.exports = {
    loginMiddleware(req,res,next){
        const  { email,password } = req.body;
        const user = users.find(user => user.email === email && user.password === password);
        if(!user)
            return res.render("session/loginForm",{
                error:"Usuário não encontrado.",
                email
            })
        req.session.user = user;
        next()
    }
}

