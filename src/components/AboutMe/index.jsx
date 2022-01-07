import personImg from "../../assets/person_computer.svg";
import "./styles.scss";

export function AboutMe() {
    return (
        <div className="portfolio__aboutme" id="aboutme">
            <h2 className="title__section">Sobre mim</h2>
            <div className="portfolio__aboutme__items">
                <div className="portfolio__aboutme__items-image">
                    <img src={personImg} alt="Pessoa no computador" />
                </div>
                <div className="portfolio__aboutme__items-slider">
                    <div className="portfolio__aboutme__items-slider-texts">
                        <label htmlFor="slide1">
                            <h2 className="slide1">Sou um jovem apaixonado pelo mundo da programação e da tecnologia.</h2>
                        </label>
                        <label htmlFor="slide2">
                            <h2 className="slide2">Iniciei meus estudos na área através de uma escola de ensino técnico, onde tive os primeiros contatos com programação</h2>
                        </label>
                        <label htmlFor="slide3">
                            <h2 className="slide3">Após isso, me formei em Sistemas de Informação e me descobri como Dev Frontend</h2>
                        </label>        
                        <div className="portfolio__aboutme__items-slider-buttons">
                            <input type="radio" name="slider" id="slide1" className="radioBtn" radioGroup="slider" />
                            <input type="radio" name="slider" id="slide2" className="radioBtn" radioGroup="slider" />
                            <input type="radio" name="slider" id="slide3" className="radioBtn" radioGroup="slider" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
