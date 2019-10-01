const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controller/SessionController");
const SpotController = require("./controller/SpotController");

const routes = Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

module.exports = routes;
