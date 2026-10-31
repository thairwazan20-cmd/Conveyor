import { Icon } from './Icon.jsx';
import { WHATSAPP_URL } from '../data/site.js';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrap topbar__in">
        <a className="logo" href="#inicio" aria-label="Conveyor Belt Group, inicio"><img src="assets/img/logo.png" alt="Conveyor Belt Group" width="404" height="191" /></a>
        <ul className="topinfo">
          <li>
            <strong>Contacto:</strong>
            <a href="tel:+5114107030"><Icon name="phone" />(+01) 410 7030</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener"><Icon name="whatsapp" />(+51) 959 723 559</a>
          </li>
          <li>
            <strong>Correo:</strong>
            <a href="mailto:ventas1@conbeltgroup.com.pe">ventas1@conbeltgroup.com.pe</a>
            <a href="mailto:ventas2@conbeltgroup.com.pe">ventas2@conbeltgroup.com.pe</a>
          </li>
          <li>
            <strong>Dirección:</strong>
            <span className="addr"><Icon name="pin" /><span>Jirón Neón 5500<br />Los Olivos / Lima - Perú</span></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
