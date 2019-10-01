const { Router } = require("express");
const SessionController = require("./controller/SessionController");

const routes = Router();

routes.post("/sessions", SessionController.store);

module.exports = routes;
