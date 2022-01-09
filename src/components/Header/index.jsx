import { useState, useRef, useContext } from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsGithub, BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeContext } from "../../hooks/ThemeContext";

import "./styles.scss";

export function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);
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
    function toggleTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
    return (
        <>
            <header className="portfolio__header">
                <h2>{`<LG />`}</h2>
                <ul className="portfolio__header-central_items menu">
                    <li><a href="#home">Início</a></li>
                    <li><a href="#aboutme">Sobre mim</a></li>
                    <li><a href="#habilities">Habilidades</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
                <div className="portfolio__header-icons">
                    <a href="https://github.com/lucasgomesgp" target="blank">
                        <BsGithub size={40} color="#ffffff" className="portfolio__header-icons-social" />
                    </a>
                    <a href="https://www.linkedin.com/in/lucas-gomes-aab356173/" target="blank">
                        <TiSocialLinkedinCircular size={50} color="#ffffff" className="portfolio__header-icons-social" />
                    </a>
                    <button onClick={toggleTheme} className="toggleTheme">
                        {
                            theme === "light" ?
                                <BsFillMoonFill size={25} color="#FFFFFF" />
                                :
                                <BsSunFill size={25} color="#EEFF00" />
                        }
                    </button>
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
            </header>
            <ul className="portfolio__header-toggle_menu menu scale-up-center" ref={menuRef}>
                <li><a href="#home">Início</a></li>
                <li><a href="#aboutme">Sobre mim</a></li>
                <li><a href="#habilities">Habilidades</a></li>
                <li><a href="#contact">Contato</a></li>
                <li><a href="https://github.com/lucasgomesgp" target="blank">Github</a></li>
                <li><a href="https://www.linkedin.com/in/lucas-gomes-aab356173/" target="blank">Linkedin</a></li>
                <li>
                    <button onClick={toggleTheme} className="toggleTheme">
                        {
                            theme === "light" ?
                                <BsFillMoonFill size={25} color="#FFFFFF" />
                                :
                                <BsSunFill size={25} color="#EEFF00" />
                        }
                    </button>
                </li>
            </ul>
        </>

    )
}
