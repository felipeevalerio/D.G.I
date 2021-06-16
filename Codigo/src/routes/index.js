const express = require('express');
const routes = express.Router();

const ProjectsController = require("../app/controllers/ProjectsController");
const ForumController = require("../app/controllers/ForumController");
const SessionsController = require("../app/controllers/SessionController");

const {loginMiddleware , isLogged , onlyVisitors} = require("../app/middlewares/session");

routes.get("/",(req,res) => {
    return res.render("index.njk");
})

routes.get("/profile",isLogged,ProjectsController.profilePage)

routes.get("/discover",ProjectsController.projectsPage)
routes.get("/discover/:id",ProjectsController.project)

routes.get("/forum",ForumController.forumPage)
routes.get("/forum/:id",ForumController.forum)


routes.get("/games/api",ProjectsController.showGamesAPI)
routes.put("/discover/:id",ProjectsController.updateAPI)


routes.get("/login",onlyVisitors,SessionsController.loginForm);
routes.post("/login",onlyVisitors,loginMiddleware,SessionsController.login);
routes.post("/logout",isLogged,SessionsController.logout);


routes.get("/register",onlyVisitors,SessionsController.registerForm)
routes.post("/register",onlyVisitors,SessionsController.register)


module.exports = routes;