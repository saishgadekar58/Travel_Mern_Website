if (process.env.NODE_ENV === "production") {
  module.exports = requir("./prod");
} else {
  module.exports = require("./dev");
}
