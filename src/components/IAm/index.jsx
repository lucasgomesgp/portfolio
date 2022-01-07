import profileImg from "../../assets/profile_picture.jpeg";
import "./styles.scss";

export function IAm() {
    return (
        <div className="portfolio__iam" id="home">
            <h1>Olá, sou
                Lucas Gomes,
                <div className="portfolio__iam-functions">
                    <span>Programador,</span>
                    <span>Desenvolvedor Frontend,</span>
                    <span>Um apaixonado pelo mundo Tech</span>
                </div>
            </h1>
            <div className="portfolio__iam-image">
                <img src={profileImg} alt="Imagem de perfil" />
            </div>
        </div>
    )
}
