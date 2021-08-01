import './contact.css';

const Contact = () => {
    return(
        <div className="contact" id="contact">
            <h2>Contáctame</h2>
            <hr />
            <form>
                <div className="data">
                    <input type="text" placeholder="Nombre" />
                    <input type="number" placeholder="Teléfono" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="message">
                    <textarea type="text" placeholder="Escribe tu mensaje" />
                    <button>Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;