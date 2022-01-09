import { useContext } from "react";
import { Header } from "../components/Header";
import { IAm } from "../components/IAm";
import { AboutMe } from "../components/AboutMe";
import { Habilities } from "../components/Habilities";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ThemeContext } from "../hooks/ThemeContext";

export function Home() {
  const {theme} = useContext(ThemeContext);
  
  return (
    <div className={`portfolio__container ${theme}`}>
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

