// const projects = require("../data/projects.json");
const projects = require("../data/projects")



module.exports = {
    profilePage(req,res){
        const filtered = projects.slice(0,3)
        return res.render("profile.njk",{projects:filtered})
    },
    projectsPage(req,res){
        return res.render("projects.njk",{projects})
    },
    async project(req,res){
        try {
            const project = projects.find(p => p.id === req.params.id)
            const authors = projects.filter(p => {
                if(p.author != project.author){
                    return p;
                }
            })
            let filtered; 
            if(project.author != "Lucas Monteiro")
                filtered = authors.slice(3,6);
            else
                filtered = authors.slice(0,3)
            return res.render("project.njk",{project,comments:filtered})
            
        } catch (err) {
            console.error(err)
        }
    },

    showGamesAPI(req,res){
        return res.json({projects})
    }   ,

    updateAPI(req,res){
        const game = projects.filter(gameFil => gameFil.id == req.params.id);
        
        return res.json({projects})
    }
}