import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HtmlTemplate from "./HtmlTemplate";
import Projects from "./components/Projects"

function App() {
  return (
    <HtmlTemplate title="Mon Site">
      <Navbar />
      <Hero />
      <Projects />
    </HtmlTemplate>
  );
}

export default App;
