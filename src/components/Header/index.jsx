import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import "./styles.scss";

export function Header() {
    return (
        <header className="portfolio__header">
            <h2>{`<LG />`}</h2>
            <ul className="portfolio__header-central_items menu">
                <li><a href="#">Início</a></li>
                <li><a href="#">Sobre mim</a></li>
                <li><a href="#">Habilidades</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
            <div className="portfolio__header-icons">
                <a href="#">
                    <BsGithub size={40} color="#ffffff" className="portfolio__header-icons-social" />
                </a>
                <a href="#">
                    <TiSocialLinkedinCircular size={50} color="#ffffff" className="portfolio__header-icons-social" />
                </a>
            </div>
            <div className="portfolio__header-toggle-icons">
                <HiOutlineMenuAlt3 size={30} />
                <AiOutlineClose size={30} />
            </div>
            <ul className="portfolio__header-toggle_menu menu">
                <li><a href="#">Início</a></li>
                <li><a href="#">Sobre mim</a></li>
                <li><a href="#">Habilidades</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Github</a></li>
                <li><a href="#">Linkedin</a></li>
            </ul>
        </header>
    )
}
