if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ quiet: true });
}
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");

const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const ExpressError = require("./utils/ExpressError.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
// const { throwDeprecation } = require("process");

const app = express();
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLAS_DB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

//accessing of view folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

//Details of sessions from online atlas
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("ERROR", () => {
  console.log("This is the error", err);
});

//details of sessions and cookies
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    HttpOnly: true,
  },
};

//Home {or} Main route
// app.get("/", (req, res) => {
//   res.send("Route is working");
// });

//To generate session id
app.use(session(sessionOptions));

//without this middleware flash doesn't work
app.use(flash());

//passport details
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//flash-messages from routes next passed to flash.ejs
app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

//routes are accessed by these middlewares
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// app.get("/userdemo" , async(req,res) =>{
//   let fakeuser = new User({
//     email : "delta@gmail.com",
//     username : "delta-student101",
//   });

//   let registeredUser = await User.register(fakeuser , "helloworld");
//   res.send(registeredUser);
// })

app.all("/*splat", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

// Error handling middleware
// app.use((err, req, res, next) => {
//   let { statusCode = 500, message = "Something went wrong!" } = err;
//   res.status(statusCode).render("error.ejs", { message });
//   // res.status(statusCode).send( message ).toString();
// });

//centralized error handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode);
  if (statusCode == 404) {
    // render your custom 404 template
    return res.render("404.ejs", { message });
  }
  console.log(statusCode);
  // fallback to the generic error template for 500, validation errors, etc.
  res.render("error.ejs", { message, err });
});

app.listen(3030, (req, res) => {
  console.log("Server started at 3030");
});
