import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HtmlTemplate from "./HtmlTemplate";

function App() {
  return (
    <HtmlTemplate title="Mon Site">
      <Navbar />
      <Hero />
    </HtmlTemplate>
  );
}

export default App;
