const express = require('express');
const routes = express.Router();

const ProjectsController = require("../app/controllers/ProjectsController");
const ForumController = require("../app/controllers/ForumController");
const SessionsController = require("../app/controllers/SessionController");

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


routes.get("/login",SessionsController.loginForm);
routes.post("/login",SessionsController.login);

routes.get("/register",SessionsController.registerForm)
routes.post("/register",SessionsController.register)


module.exports = routes;