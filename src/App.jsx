import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import FirstSection from "./Components/Portfolio/FirstSection";
import SecondSection from "./Components/Portfolio/SecondSection";
import AboutMe from "./Components/Portfolio/AboutMe";
import { motion } from "framer-motion";
function App() {
  return (
    <>
      <Header />
      <div id="home">
        <FirstSection />
      </div>
      <div id="projects">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <SecondSection />
        </motion.div>
      </div>
      <div id="aboutme">
        <AboutMe />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
