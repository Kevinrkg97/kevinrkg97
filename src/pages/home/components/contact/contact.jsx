import './contact.css';
import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact (){

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('Portfolio', 'kevinrkg97-contacto', e.target, 'user_eHxQsQ8VDlXV45h08H4w4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }


    return(
        <div className="contact" id="contact">
            <h2>Contáctame</h2>
            <hr />
            <form onSubmit={sendEmail} >
                <div className="data">
                    <input type="text" placeholder="Nombre" name="nombre" />
                    <input type="number" placeholder="Teléfono" name="telefono" />
                    <input type="email" placeholder="Email" name="email" />
                </div>
                <div className="message">
                    <textarea type="text" placeholder="Escribe tu mensaje" name="mensaje" />
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    );
}

