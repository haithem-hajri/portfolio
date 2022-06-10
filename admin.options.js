const AdminBro = require("admin-bro");
const AdminBroExpressjs = require("admin-bro-expressjs");
const Contact = require("./models/Contact");
const Skill = require("./models/Skill");
const Education = require("./models/Education");
const Experience = require("./models/Experience");
const About = require("./models/About");
const Project = require("./models/Project");
// We have to tell AdminBro that we will manage mongoose resources with it
AdminBro.registerAdapter(require("admin-bro-mongoose"));
//about option
const AboutResourceOptions = {
  properties: {
    message: {
      type: "richtext",
      custom: {
        // some custom options
      },
    },
  },
};
// Pass all configuration settings to AdminBro
const options = {
  resources: [
    Contact,
    Skill,
    Education,
    Experience,
    Project,
    { resource: About, options: AboutResourceOptions },
  ],
  rootPath: "/admin",
  branding: {
    companyName: "Portfolio",
    logo: "https://i.pinimg.com/originals/b3/a6/a1/b3a6a10a79908d5399673e4de0d89b80.png",
  },
};

module.exports = options;
