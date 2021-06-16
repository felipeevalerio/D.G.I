const data  = require("../data/users.json") 
const users = data.users;
const fs = require("fs")
module.exports = {
    loginForm(req,res){
        return res.render("session/loginForm");
    },
    registerForm(req,res){

        return res.render("session/registerForm");
    },
    login(req,res){
        return res.redirect("/");
    },
    async register(req,res){
        try{
            const { name, email, password , repeatPassword, avatar} = req.body;
            const games = [];
            const id = users.length + 1 ; 
            if(password !== repeatPassword)
                return res.render("session/registerForm", {
                    error:"As senhas não coincidem.",
                    ...req.body
                })
            const alreadyExists = users.find(user => user.email === email);
    
            if(alreadyExists)
                return res.render("session/registerForm", {
                    error:"Usuário já existe.",
                    ...req.body
                })
        
            users.push({
                id,
                name,
                email, 
                password,
                avatar,
                games
            });  
    
            fs.writeFile("./src/app/data/users.json",JSON.stringify(users,null,2),(err)=>{
                if(err)
                    console.log(err);
            })
    
            return res.redirect("/login");
        }
        catch(err){
            console.error(err);
        }        

    },
    logout(req,res){
        req.session.destroy();
        return res.redirect("/");
    }

}