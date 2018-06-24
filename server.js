const express = require("express");
const mongoose = require("mongoose");
const app = express();

const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");
const posts = require("./routes/api/posts");
//db config
const db = require("./config/keys").mongoURI;
//connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("Mongo db connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("helwwwwlo"));
app.use("/api/users", users);
app.use("/api/profiles", profiles);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server runnning on port " + port));
