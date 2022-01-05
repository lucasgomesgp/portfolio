import "./App.scss";
import { Header } from "./components/Header";
import { IAm } from "./components/IAm";
import { AboutMe } from "./components/AboutMe";
import { Habilities } from "./components/Habilities";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="portfolio__container">
      <Header />
      <IAm />
      <AboutMe />
      <Habilities />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
