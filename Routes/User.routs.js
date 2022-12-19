const express = require('express')
const userController =require('../Controllers/User.controller')
const multer = require("../MiddleWares/multer")
const router = express.Router()


router.route("/")
    .post(multer.array("image"),userController.postuser)
    .patch(userController.patchuser)
    .delete(userController.deleteuser)

router.route('/show')
.get(userController.getusers)
.post(userController.getuser)

module.exports = router;