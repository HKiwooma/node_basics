const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "pug"); // Setting the view engine to pug
app.set("views", path.join(__dirname, "views")); // Setting the folder path
app.use(express.static(path.join(__dirname, "public")));

// body-parser to parse request body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importing Routes
// Define db routes
const registrationRoute = require("./routes/registrationRoutes");

require("./models/Photo");
const index = require("./routes/index");
const users = require("./routes/users");

app.use("/register", registrationRoute);
app.use("/", index);
app.use("/users", users);

//connecting to the DB
// mongoose.Promise = global.Promise;
mongoose.set("useUnifiedTopology", true);
mongoose.connect(
  "mongodb://localhost:27017/node-demo",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to DB");
  }
);

app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//how to start listening to the serve
app.listen(3000, () => {
  console.log("listening on 3000");
});
