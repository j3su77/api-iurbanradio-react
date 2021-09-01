const express = require("express");
const userCtrl = require("../controllers/users.controllers");

const router = express.Router();


// UPDATE
router.put("/:id", userCtrl.putUser)

// DELETE
router.delete("/:id", userCtrl.deleteUser)


// GET USER
router.get("/:id", userCtrl.getUser)





module.exports = router;