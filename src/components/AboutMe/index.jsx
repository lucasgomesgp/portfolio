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
                <div className="portfolio__aboutme__items-texts">
                    <h2>Sou um jovem de 21 anos, apaixonado pelo mundo da programação e da tecnologia</h2>
                </div>
            </div>
        </div>
    )
}
