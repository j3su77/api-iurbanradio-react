const express =  require("express");
const authCtrl = require("../controllers/auth.controllers");

const router = express.Router();


// Register
router.post("/register", authCtrl.register)

// Login
router.post("/login", authCtrl.login)



module.exports = router;