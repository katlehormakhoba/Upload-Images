const router = require("express").Router();
const userController = require("../controllers/userController")

router.route("/upload").post(userController.uploadImage, userController.updateUser);

module.exports = router;
