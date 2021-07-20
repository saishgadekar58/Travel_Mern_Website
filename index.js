const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DB =
  "mongodb+srv://saishGadekar:35059076@travel-website.gw5ms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("conn succesful"))
  .catch((error) => console.error(error));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
