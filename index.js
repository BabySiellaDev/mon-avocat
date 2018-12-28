var app = require("express")();
app.use(
  require("express-session")({
    secret: "hey",
    resave: false,
    saveUninitialized: false
  })
);

// Reading environement from local test env
const fs = require("fs");
const envPath = __dirname + "/.env";
if (fs.existsSync(envPath)) {
  const env = JSON.parse(fs.readFileSync(envPath, "utf-8"));
  Object.keys(env).forEach(key => {
    process.env[key] = env[key];
  });
}

app.set("view engine", "ejs");
app.use(require("body-parser").json({ extended: true }));

app.use("/", require("express").static(__dirname + "/assets"));

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);

app.use("/", require("./routers/page.router.js"));

app.listen(3000);
console.log("app is running on port 3000");
