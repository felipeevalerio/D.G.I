const projects = require("../data/projects.json");

module.exports = {
    profilePage(req,res){
        const filtered = projects.games.slice(0,3)
        return res.render("profile.njk",{projects:filtered})
    },
    projectsPage(req,res){
        return res.render("projects.njk",{projects:projects.games})
    },
    async project(req,res){
        try {
            const project = projects.games.find(p => p.id === req.params.id)
            const authors = projects.games.filter(p => {
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
    }
}