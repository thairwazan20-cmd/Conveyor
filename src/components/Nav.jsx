import { useCallback, useEffect, useRef, useState } from 'react';
import Search from './Search.jsx';
import Social from './Social.jsx';
import { MENU_LINKS } from '../data/site.js';
import { useScrollFrame } from '../hooks/useScrollFrame.js';

const SPY_SECTIONS = ['inicio', 'nosotros', 'servicios', 'productos', 'contacto'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const beltBar = useRef(null);

  // Faja de progreso
  useScrollFrame(useCallback(() => {
    const max = document.documentElement.scrollHeight - innerHeight;
    beltBar.current.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  }, []));

  // Enlace activo del menú
  useEffect(() => {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      });
    }, { rootMargin: '-45% 0px -50%' });
    SPY_SECTIONS.forEach((id) => spy.observe(document.getElementById(id)));
    return () => spy.disconnect();
  }, []);

  return (
    <header className="nav" id="nav">
      <div className="wrap nav__in">
        <button className="burger" id="burger" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}><span></span><span></span><span></span></button>
        <nav className={open ? 'menu is-open' : 'menu'} id="menu" aria-label="Principal">
          {MENU_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.href === active ? 'is-active' : undefined}
              onClick={() => setOpen(false)}
              {...(link.external && { target: '_blank', rel: 'noopener' })}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav__right">
          <Search />
          <Social />
        </div>
      </div>
      <div className="belt" aria-hidden="true"><div className="belt__bar" ref={beltBar}></div></div>
    </header>
  );
}
