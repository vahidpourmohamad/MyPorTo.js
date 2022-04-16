import "./App.css";
import Home from "./myportocontainer/Home/Home";
import Menu from "./myportocontainer/Menu/Menu";
import About from "./myportocontainer/AboutMe/About";
import Resume from "./myportocontainer/CV/Resume";
import Projects from "./myportocontainer/Projects/Projects";
import Footer from "./myportocontainer/Footer/Footer";
import Parallax from "./myportocontainer/Helper/Parallax";
function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <About />
      <Resume />
      <Parallax />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
