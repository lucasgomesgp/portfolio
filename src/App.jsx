import { Header } from "./components/Header";
import { IAm } from "./components/IAm";
import { AboutMe } from "./components/AboutMe";
import { Habilities } from "./components/Habilities";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="portfolio__container">
      <div className="portfolio__container-initial-items">
        <Header />
        <IAm />
      </div>
      <AboutMe />
      <Habilities />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
