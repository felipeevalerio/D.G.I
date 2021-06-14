const { users } = require("../data/users"); 

module.exports = {
    loginForm(req,res){
        return res.render("session/loginForm");
    },
    registerForm(req,res){

        return res.render("session/registerForm");
    },
    login(req,res){
        const {email,password} = req.body;
        const user = users.find(user => user.email === email && user.password === password);
        if(!user)
            return res.render("session/loginForm",{
                message:"Usuário não encontrado.",
                email
            })
        
        return res.send(user);
    },
    register(req,res){
 
 
    }

}