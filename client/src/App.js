import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/education/Education";
import ContactUs from "./components/Contact/ContactUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
const App = () => (
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

export default App;
