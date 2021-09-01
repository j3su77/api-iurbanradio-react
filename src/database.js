const mongoose = require("mongoose");

mongoose.connect(process.env.DB, async (err) => {
  if (err) throw err;
  console.log("backend conncted to db");
});

module.exports = mongoose;
