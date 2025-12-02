import './index.css'

const AboutUs = () => {
  return (
    <section className="about-us-container">
      <div className="about-us-content">
        <h2 className="about-us-title">Sobre Nosotros</h2>

        <p>
          En <strong>Neon Byte</strong> somos apasionados por el mundo del hardware y el armado de computadoras. 
          Nacimos con una idea simple: ofrecer productos de calidad, al mejor precio, con la atención que nos gustaría 
          recibir cuando armamos nuestra propia PC.
        </p>

        <p>
          Sabemos lo importante que es elegir la placa de video correcta, una fuente confiable o ese gabinete que viste 
          en videos de YouTube. Por eso trabajamos con marcas reconocidas, productos 100% originales y stock actualizado, 
          para que puedas armar la PC que querés sin complicaciones.
        </p>

        <ul>
          <li>Productos de alto rendimiento para gaming, diseño o trabajo.</li>
          <li>Asesoramiento real basado en experiencia técnica.</li>
          <li>Envíos rápidos y seguros a todo el país.</li>
          <li>Transparencia en precios, garantía y especificaciones.</li>
        </ul>

        <p>
          Ya sea que estés armando tu primera computadora o diseñando tu setup definitivo, estamos para ayudarte a 
          elegir cada componente con confianza y seguridad.
        </p>

        <p className="about-us-ending">
          <strong>Tu PC empieza acá.</strong>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
