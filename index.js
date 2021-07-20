const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const User = require("./models/user");
const config = require("./config/key");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("conn succesful"))
  .catch((error) => console.error(error));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`running on port ${port}`);
});
