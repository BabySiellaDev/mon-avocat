var app = require("express")();
app.use(
  require("express-session")({
    secret: "hey",
    resave: false,
    saveUninitialized: false
  })
);
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

app.get("/register", function(req, res) {
  res.render("register");
});
