import React from "react"
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/education/Education";
import ContactUs from "./components/Contact/ContactUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import axios from "axios"
import ReactGA from "react-ga4";

const App = () => {
  //G-67H0H5XP54
  React.useEffect(()=>{
    console.log('helloo')
    ReactGA.initialize('G-67H0H5XP54'); 
    ReactGA.send('/');
  },[])
  // const [ip, setIP] = React.useState("");

  // //creating function to load ip address from the API
  // const getData = async () => {
  //   const res = await axios.get("https://geolocation-db.com/json/");
  //   console.log(res.data);
  //   setIP(res.data.IPv4);
  //   console.log("ip:",ip);
  // };

  // React.useEffect(() => {
  //   //passing getData method to the lifecycle method
  //   getData();
  // }, []);
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
