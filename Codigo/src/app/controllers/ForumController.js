const topics = require("../data/forum.json")
const games = require("../data/projects.json")

module.exports = {
    forumPage(req,res){
        const filtered = topics.topics.slice(0,3)
        return res.render("forum.njk",{topics:filtered})
    },
    forum(req,res){
        const { id } = req.params;
        const topic = topics.topics.find((top)=> {
            if(top.id == id)
                return top;
        })
        const comments = games.games.slice(3,6)
        return res.render("topic.njk",{topic,comments})
    }
}