const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const contactUs = require("./routes/contact-us");
const skills = require("./routes/skills");
const education = require("./routes/education");
const experience = require("./routes/experience");
const visitor = require("./routes/visitor");
const about = require("./routes/about");
const projects = require("./routes/project");
const formidableMiddleware = require("express-formidable");
const AdminBro = require("admin-bro");
const AdminBroExpressjs = require("admin-bro-expressjs");
const options = require("./admin.options");
require("dotenv").config();
mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === "production") {
  MONGODB_URI = process.env.MONGODB_URI;
} else {
  MONGODB_URI = process.env.DEV_MONGO;
}
// const router = AdminBroExpressjs.buildAuthenticatedRouter(
//   adminBro,
//   {
//     cookieName: process.env.COOKIE_NAME || "admin-bro",
//     cookiePassword: process.env.COOKIE_PASSWORD || "admin",
//     authenticate: async (email, password) => {
//       if (email === ADMIN.email && password === ADMIN.password) {
//         return {
//           email: ADMIN.email,
//           isAdmin: true,
//         };
//       }
//       return null;
//     },
//   },
//   null,
//   {
//     resave: false,
//     saveUninitialized: true,
//   }
// );
// const adminBro = new AdminBro(options);
const PORT = process.env.PORT || 5001;
const ADMIN = {
  email: process.env.ADMIN_EMAIL || "haithem@admin.com",
  password: process.env.ADMIN_PASSWORD || "admin",
};
// "dev": "concurrently \"npm run server\" \"npm run client\"",
// express server definition
const app = express();
app.use(formidableMiddleware());

//middlwares
app.use(cors());
// app.use(bodyParser.json());

//const router = AdminBroExpressjs.buildRouter(adminBro);
// Build and use a router which will handle all AdminBro routes with authentication

//routes

app.use("/api", contactUs);
app.use("/api", skills);
app.use("/api", education);
app.use("/api", experience);
app.use("/api", about);
app.use("/api", projects);
app.use("/api", visitor);
// app.use(adminBro.options.rootPath, router);

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);
mongoose.connection
  .once("open", function () {
    console.log("Conection has been made!!");
  })
  .on("error", function (error) {
    console.log("Error is: ", error);
  });
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "client/build/index.html"));
  });
}
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
