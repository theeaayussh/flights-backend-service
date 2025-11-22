const express = require("express");
const { InfoController } = require("../../controllers");
const router = express.Router();

const airplanesRoutes = require("./airplane-routes")

router.use('/airplanes', airplanesRoutes)

router.get("/info", InfoController.info);

module.exports = router;
