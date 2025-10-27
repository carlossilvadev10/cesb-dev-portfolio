import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App;