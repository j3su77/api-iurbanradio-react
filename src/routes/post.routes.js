const express =  require("express");
const postCtrl =  require("../controllers/post.controllers");

const router = express.Router();

// CREATE POST
router.post("/", postCtrl.createPost)

// UPDATE POST
router.put("/:id", postCtrl.putPost)

// DELETE POST
router.delete("/:id", postCtrl.deletePost)


// GET POST
router.get("/:id", postCtrl.getPost)


// GET ALL POST
router.get("/", postCtrl.getAllPost)

module.exports = router;