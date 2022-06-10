const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");
const contactUs = require("./routes/contact-us");
const skills = require("./routes/skills");
const education = require("./routes/education");
const experience = require("./routes/experience");
const about = require("./routes/about");
const projects = require("./routes/project");
const formidableMiddleware = require("express-formidable");
const AdminBro = require("admin-bro");
const AdminBroExpressjs = require("admin-bro-expressjs");
const options = require("./admin.options");
const config = require("dotenv").config();
mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === "production") {
  MONGO_URL = process.env.PROD_MONGO;
} else {
  MONGO_URL = process.env.DEV_MONGO;
}

  const PORT = process.env.PORT || 5001;
const ADMIN = {
  email: process.env.ADMIN_EMAIL || "haithem@admin.com",
  password: process.env.ADMIN_PASSWORD || "admin",
};

// express server definition
const app = express();
app.use(formidableMiddleware());

//middlwares
app.use(cors());
//app.use(bodyParser.json());
//routes

app.use("/api", contactUs);
app.use("/api", skills);
app.use("/api", education);
app.use("/api", experience);
app.use("/api", about);
app.use("/api", projects);



// admin bro no authentication
// Pass all configuration settings to AdminBro
const adminBro = new AdminBro(options);
//const router = AdminBroExpressjs.buildRouter(adminBro);
// Build and use a router which will handle all AdminBro routes with authentication
const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.COOKIE_NAME || "admin-bro",
  cookiePassword: process.env.COOKIE_PASSWORD || "admin",
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return {
        email: ADMIN.email,
        isAdmin: true,
      };
    }
    return null;
  },
  
},null, {
  resave: false,
  saveUninitialized: true,});
app.use(adminBro.options.rootPath, router);

// Connect MongoDB at default port 27017.
mongoose.connect(
  MONGO_URL,
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
if(process.env.NODE_ENV=="production"){
  app.use(express.static('client/build'))
  const path = require('path')
  app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
