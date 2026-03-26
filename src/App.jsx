import { lazy, Suspense } from "react";
import "./App.css";

// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import FirstSection from "./Components/Portfolio/FirstSection";
// import SecondSection from "./Components/Portfolio/SecondSection";
// import AboutMe from "./Components/Portfolio/AboutMe";

const Footer = lazy(() => import("./Components/Footer"));
const Header = lazy(() => import("./Components/Header"));

const FirstSection = lazy(() => import("./Components/Portfolio/FirstSection"));

const SecondSection = lazy(
  () => import("./Components/Portfolio/SecondSection"),
);

const AboutMe = lazy(() => import("./Components/Portfolio/AboutMe"));
import { motion } from "framer-motion";
function App() {
  return (
    <>
      <Header />
      <Suspense>
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
      </Suspense>
    </>
  );
}

export default App;
