import manImg from "../../assets/man_computer.svg";
import html from "../../assets/icons/HTML.svg";
import css from "../../assets/icons/CSS.svg";
import javascript from "../../assets/icons/Javascript.svg";
import bootstrap from "../../assets/icons/Bootstrap.svg";
import react from "../../assets/icons/ReactJS.svg";
import node from "../../assets/icons/NodeJS.svg";
import github from "../../assets/icons/Github.svg";
import next from "../../assets/icons/NextJS.svg";
import "./styles.scss";

export function Habilities() {
    return (
        <div className="portfolio__habilities" id="habilities">
            <h2 className="title__section">
                Habilidades
            </h2>
            <section className="portfolio__habilities-items">
                <div className="portfolio__habilities-items_image">
                    <img src={manImg} alt="Homem no computador" />
                </div>
                <div className="portfolio__habilities-items_icons">
                    <img src={html} alt="HTML5" />
                    <img src={css} alt="CSS3" />
                    <img src={javascript} alt="Javascript" />
                    <img src={bootstrap} alt="Bootstrap" />
                    <img src={react} alt="RectJS" />
                    <img src={node} alt="NodeJS" />
                    <img src={github} alt="Github" />
                    <img src={next} alt="NextJS" />
                </div>
            </section>
        </div>
    )
}
