import { BsGithub, BsCloudUploadFill } from "react-icons/bs";
import "./styles.scss";

export function Projects() {
    return (
        <div className="portfolio__myprojects">
            <h2 className="title__section">Meus projetos</h2>
            <div className="portfolio__myprojects_projects">
                <div className="portfolio__myprojects_projects-proj">
                    <img src="https://via.placeholder.com/300" alt="" />
                    <div className="portfolio__myprojects_projects-proj-techs">
                        <p>ReactJS</p>
                        <p>Figma</p>
                        <p>NextJS</p>
                    </div>
                    <div className="portfolio__myprojects_projects-proj-info">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Porro molestiae quidem dignissimos dolor voluptates sint hic facilis dicta vitae.
                        Ducimus, sunt porro! Nemo nostrum aperiam, magnam repellat maxime quibusdam ipsam?
                    </div>
                    <div className="portfolio__myprojects_projects-proj-links">
                        <a href="#" className="deploy">
                            Deploy
                            <BsCloudUploadFill size={20} />
                        </a>
                        <a href="#" className="github">
                            Github
                            <BsGithub size={20} />
                        </a>
                    </div>
                </div>
                <div className="portfolio__myprojects_projects-proj">
                    <img src="https://via.placeholder.com/300" alt="" />
                    <div className="portfolio__myprojects_projects-proj-techs">
                        <p>ReactJS</p>
                        <p>Figma</p>
                        <p>NextJS</p>
                    </div>
                    <div className="portfolio__myprojects_projects-proj-info">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Porro molestiae quidem dignissimos dolor voluptates sint hic facilis dicta vitae.
                        Ducimus, sunt porro! Nemo nostrum aperiam, magnam repellat maxime quibusdam ipsam?
                    </div>
                    <div className="portfolio__myprojects_projects-proj-links">
                        <a href="#" className="deploy">
                            Deploy
                            <BsCloudUploadFill size={20} />
                        </a>
                        <a href="#" className="github">
                            Github
                            <BsGithub size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
