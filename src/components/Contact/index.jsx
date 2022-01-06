import "./styles.scss";

export function Contact() {
    return (
        <div className="portfolio__contact" id="contact">
            <h2 className="title__section">Contato</h2>
            <form action="mailto:lucasgpdev@gmail.com" method="post" className="portfolio__contact-form">
                <input type="text" name="nome" placeholder="Nome completo" />
                <input type="email" name="email" placeholder="Email" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Digite sua mensagem"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
