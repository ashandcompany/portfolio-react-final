import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HtmlTemplate from "./HtmlTemplate";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import ThemeToggle from "./components/ThemeToggle";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <HtmlTemplate title="Mon Site">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Contact />
    </HtmlTemplate>
  );
}

export default App;
