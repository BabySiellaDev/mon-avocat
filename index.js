var app = require("express")();
app.use(
  require("express-session")({
    secret: "hey",
    resave: false,
    saveUninitialized: false
  })
);

app.set("view engine", "ejs");
app.use(require("body-parser").json({ extended: true }));

app.use("/", require("express").static(__dirname + "/assets"));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

app.use("/", require("./routers/page.router.js"));

app.listen(3000);
console.log("app is running on port 3000");
