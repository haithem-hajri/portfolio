import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/education/Education";
import ContactUs from "./components/Contact/ContactUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import axios from "axios";
import ReactGA4 from "react-ga4";
import { API_URL } from "./env";
ReactGA4.initialize("G-67H0H5XP54");
const App = () => {
  //G-67H0H5XP54
  React.useEffect(() => {
    ReactGA4.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  const [visitor, setVisitor] = React.useState(null);
  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setVisitor(res.data);
  };

  React.useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);
  React.useEffect(() => {
    if (visitor) {
      axios.post(`${API_URL}/vs`, visitor)
    }
  }, [visitor]);
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
