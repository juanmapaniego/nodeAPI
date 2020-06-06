const express = require("express");
const usersController = require("../../controllers/v1/users-controller.js");


const router = express.Router();
router.get("/", usersController.getUsuario); 
router.post("/",usersController.crearUsuario);
router.put("/",usersController.actualizarUsuario);
router.delete("/",usersController.eliminarUsuario);

module.exports = router; 