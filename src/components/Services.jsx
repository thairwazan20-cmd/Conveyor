import { Icon } from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { SERVICES } from '../data/site.js';

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="wrap">
        <Reveal as="header" className="head">
          <h2>Servicios</h2>
          <p>Contamos con la mejor tecnología americana para realizar diversos servicios en fajas transportadoras.</p>
        </Reveal>
        <div className="grid grid--3">
          {SERVICES.map((service, i) => (
            <Reveal as="article" className="card" id={service.id} delay={i} key={service.id}>
              <div className="card__img"><img loading="lazy" src={service.img} alt={service.alt} /></div>
              <h3>{service.title}</h3>
            </Reveal>
          ))}
          <Reveal as="aside" className="team" delay={SERVICES.length}>
            <p className="team__title"><i><Icon name="check" /></i><span>Te enviamos nuestro equipo técnico a tu empresa</span></p>
            <ul aria-hidden="true">
              <li><Icon name="worker" /></li>
              <li><Icon name="gear" /></li>
              <li><Icon name="shield" /></li>
              <li><Icon name="truck" /></li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
