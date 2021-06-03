const express = require('express');
const routes = express.Router();

const ProjectsController = require("../app/controllers/ProjectsController");
const ForumController = require("../app/controllers/ForumController");


routes.get("/",(req,res) => {
    return res.render("index.njk");
})

routes.get("/profile",ProjectsController.profilePage)

routes.get("/discover",ProjectsController.projectsPage)
routes.get("/discover/:id",ProjectsController.project)

routes.get("/forum",ForumController.forumPage)
routes.get("/forum/:id",ForumController.forum)


routes.get("/games/api",ProjectsController.showGamesAPI)
routes.put("/discover/:id",ProjectsController.updateAPI)
module.exports = routes;