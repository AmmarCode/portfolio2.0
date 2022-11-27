import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const showNavBar = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="App flex flex-col mx-5">
      <NavBar showNavBar={showNavBar} openMenu={openMenu} />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
