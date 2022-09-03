const express = require("express");
const usersController = require("../../controllers/users.controller");
const { limiter } = require("../../middleware/limiter");
const randomUser = require("../../middleware/randomUser");
const router = express.Router();


router
.route("/all")
.get(usersController.getAllUsers);

router
.route("/:random")
.get(usersController.getRandomUser);

router
.route("/:save")
.post(usersController.saveAUser);

router
.route("/:update/:id")
.patch(usersController.updateUser);

router
.route("/:delete/:id")
.delete(usersController.deleteUser);

router
.route("/:id")
.get(usersController.getUserDetails);

module.exports = router;