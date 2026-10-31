import { Icon } from './Icon.jsx';
import { SOCIAL_LINKS } from '../data/site.js';

export default function Social({ className = 'social', children }) {
  // Redes aún sin URL: no saltar al inicio de la página
  const onClick = (e) => {
    if (e.currentTarget.getAttribute('href') === '#') e.preventDefault();
  };

  return (
    <div className={className}>
      {SOCIAL_LINKS.map((link) => (
        <a key={link.label} href={link.href} aria-label={link.label} onClick={onClick}><Icon name={link.icon} /></a>
      ))}
      {children}
    </div>
  );
}
