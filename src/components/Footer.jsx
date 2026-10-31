import Social from './Social.jsx';
import { FOOTER_LINKS, WHATSAPP_URL } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="wrap footer__grid">
        <div>
          <img className="footer__logo" loading="lazy" src="assets/img/logo-blanco.png" alt="Conveyor Belt Group" width="404" height="191" />
          <p>Empresa peruana líder, importadora directa de prestigiosas marcas internacionales de suministros y bandas industriales.</p>
        </div>
        <nav aria-label="Enlaces">
          <h2>Enlaces:</h2>
          {FOOTER_LINKS.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="footer__contact">
          <h2>Contacto:</h2>
          <p className="big"><a href="tel:+5114107030">01 410 7030</a> / <a href={WHATSAPP_URL} target="_blank" rel="noopener">+51 959 723 559</a></p>
          <p><a href="mailto:ventas1@conbeltgroup.com.pe">Correo: ventas1@conbeltgroup.com.pe</a></p>
          <p>Jirón Neón 5500<br />Los Olivos / Lima - Perú</p>
          <Social className="social social--foot"><span>@conbeltgroup</span></Social>
          <p><a href="https://www.conbeltgroup.com.pe">www.conbeltgroup.com.pe</a></p>
        </div>
      </div>
      <p className="footer__legal">© <span>{new Date().getFullYear()}</span> Conveyor Belt Group. Todos los derechos reservados.</p>
    </footer>
  );
}
