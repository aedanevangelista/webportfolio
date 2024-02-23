import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="">
      <Navbar className=" z-50" />
      <Home />
      <About className=" z-10" />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
