const express = require("express");
const categoriesCtrl = require("../controllers/categories.controllers");

const router = express.Router();

// CREATE CATEGORY
router.post("/", categoriesCtrl.createCategory)

// GET CATEGORY
router.get("/", categoriesCtrl.getCategory)

module.exports = router;

