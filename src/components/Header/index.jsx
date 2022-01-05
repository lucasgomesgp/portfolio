import { useState, useRef } from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import "./styles.scss";

export function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const menuRef = useRef();

    function toggleMenuValue() {
        if (!toggleMenu) {
            setToggleMenu(true);
            menuRef.current.style.display = "flex";
        }
        else {
            setToggleMenu(false);
            menuRef.current.style.display = "none";
        }



    }
    return (
        <header className="portfolio__header">
            <h2>{`<LG />`}</h2>
            <ul className="portfolio__header-central_items menu">
                <li><a href="#home">Início</a></li>
                <li><a href="#aboutme">Sobre mim</a></li>
                <li><a href="#habilities">Habilidades</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
            <div className="portfolio__header-icons">
                <BsGithub size={40} color="#ffffff" className="portfolio__header-icons-social" />
                <TiSocialLinkedinCircular size={50} color="#ffffff" className="portfolio__header-icons-social" />
            </div>
            <div className="portfolio__header-toggle-icons">
                {
                    toggleMenu ?
                        (
                            <AiOutlineClose size={30} onClick={toggleMenuValue} />
                        ) : (
                            <HiOutlineMenuAlt3 size={30} onClick={toggleMenuValue} />
                        )
                }
            </div>
            <ul className="portfolio__header-toggle_menu menu scale-up-center" ref={menuRef}>
                <li><a href="#home">Início</a></li>
                <li><a href="#aboutme">Sobre mim</a></li>
                <li><a href="#habilities">Habilidades</a></li>
                <li><a href="#contact">Contato</a></li>
                <li><a href="#github">Github</a></li>
                <li><a href="#linkedin">Linkedin</a></li>
            </ul>
        </header>
    )
}
