const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/users.routes");
const postRoute = require("./routes/post.routes");
const categoryRoute = require("./routes/categories.routes");
require("./config/config");
require("dotenv").config();
require("./database");

const app = express();
app.use(morgan("dev"));
app.set("port", process.env.PORT || 4000);

//static file
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use(
  cors({
    origin: "*", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.get("/", (req , res) => {
  res.send("api iurban Radio")
})

// routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// listen server
app.listen(app.get("port"), () => {
  console.log("backend running on port: ", app.get("port"));
});
