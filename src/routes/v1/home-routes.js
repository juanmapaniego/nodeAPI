const express = require("express");
const homeController = require("../../controllers/v1/home-controller.js");

const router = express.Router();
router.get("/", homeController.index);

module.exports = router;  