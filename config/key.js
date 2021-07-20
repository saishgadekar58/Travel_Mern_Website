if (process.env.NODE_ENV === "production") {
  module.exports = required("./prod");
} else {
  module.exports = require("./dev");
}
