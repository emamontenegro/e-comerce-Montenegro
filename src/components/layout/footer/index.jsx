import instagram from '../../../assets/icons/instagram.svg';
import facebook from '../../../assets/icons/facebook.svg';
import gmail from '../../../assets/icons/gmail.svg';
import whatsapp from '../../../assets/icons/whatsapp.svg';
import './index.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2 className="footer-logo">NeonByte</h2>
            <p>Potenciando tu setup con la mejor tecnología.</p>
            </div>

              <div className="footer-socials">
                <h4>Contacto y Redes</h4>
                  <div className="social-icons">
                    <a href="https://wa.me/" target="_blank" className="icon-link">
                      <img src={whatsapp} alt="WhatsApp" className="footer-icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" className="icon-link">
                      <img src={instagram} alt="Instagram" className="footer-icon" />
                    </a>
                    <a href="https://facebook.com" target="_blank" className="icon-link">
                      <img src={facebook} alt="Facebook" className="footer-icon" />
                    </a>
                    <a href="https://mail.google.com" target="_blank" className="icon-link">
                      <img src={gmail} alt="Gmail" className="footer-icon" />
                    </a>
                  </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© {year} NeonByte. Todos los derechos reservados.</p>
              <p>Desarrollado por <strong>Emanuel Montenegro</strong></p>
            </div>
      </footer>
  );
};

export default Footer;