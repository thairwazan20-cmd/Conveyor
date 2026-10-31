import { useCallback, useRef } from 'react';
import { Icon } from './Icon.jsx';
import { BRANDS, REDUCED_MOTION } from '../data/site.js';
import { useScrollFrame } from '../hooks/useScrollFrame.js';

export default function Hero() {
  const heroBg = useRef(null);

  // Parallax del fondo
  useScrollFrame(useCallback(() => {
    if (!REDUCED_MOTION && scrollY < innerHeight * 1.2) heroBg.current.style.transform = `translateY(${scrollY * 0.14}px)`;
  }, []));

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" ref={heroBg}><img src="assets/img/hero.webp" alt="" fetchPriority="high" /></div>
      <div className="wrap hero__body">
        <p className="hero__kicker">Conveyor Belt Group</p>
        <h1><span className="line"><span>Líder en bandas</span></span><span className="line"><span>y suministros</span></span></h1>
        <a className="btn btn--sky hero__cta" href="#nosotros">Conoce más <i><Icon name="arrow" /></i></a>
      </div>
      <div className="brands">
        {BRANDS.map((brand) => <img key={brand.alt} loading="lazy" src={brand.src} alt={brand.alt} />)}
      </div>
    </section>
  );
}
