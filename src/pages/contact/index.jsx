import { useState } from "react";
import "./index.css";

const Contact = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const sendForm = (e) => {
    e.preventDefault();
    setFormularioEnviado(true);
  };

  return (
    <div className="divcontact">
      <h1 className="contact-title">Contactanos</h1>

      {!formularioEnviado ? (
        <form className="contact-form" onSubmit={sendForm}>
          <label className="contact-label" htmlFor="name">
            Nombre y Apellido
          </label>
          <input
            className="contact-input"
            type="text"
            id="name"
            name="name"
            required
          />

          <label className="contact-label" htmlFor="phone">
            Teléfono
          </label>
          <input
            className="contact-input"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Ej: 11 1234 5678"
            required
          />

          <label className="contact-label" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            className="contact-input"
            type="email"
            id="email"
            name="email"
            required
          />

          <label className="contact-label" htmlFor="message">
            Mensaje
          </label>
          <textarea
            className="contact-textarea"
            id="message"
            name="message"
            required
          ></textarea>

          <button className="contact-button" type="submit">
            Enviar
          </button>
        </form>
      ) : (
        <p className="contact-success">
          ¡Gracias por contactarnos! Te responderemos pronto ✅
        </p>
      )}
    </div>
  );
};

export default Contact;
