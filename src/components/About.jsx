import { Icon } from './Icon.jsx';
import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="wrap about__grid">
        <Reveal className="about__photo from-left">
          <img loading="lazy" src="assets/img/nosotros.webp" alt="Asesora comercial sonriendo en su escritorio" />
        </Reveal>
        <Reveal className="about__panel">
          <h2 className="tag"><i><Icon name="arrow" /></i>Nosotros</h2>
          <p className="about__lead"><b>CONBELTGROUP</b> es una empresa peruana líder, importadora directa de prestigiosas marcas internacionales de suministros y bandas industriales. Nos especializamos en brindar soluciones integrales de alta calidad para los sectores agroindustrial, minero, pesquero y la industria en general, garantizando productos que cumplen con los más altos estándares de desempeño, seguridad y durabilidad para optimizar sus procesos productivos.</p>
          <div className="about__cards">
            <article>
              <h3 className="tag tag--sm"><i><Icon name="arrow" /></i>Misión</h3>
              <p>Contamos con la experiencia en el sector industrial y estamos comprometidos a brindar productos y servicios con tecnología avanzada a precios competitivos, logrando satisfacer las necesidades y expectativas de nuestros clientes con una labor eficiente.</p>
            </article>
            <article>
              <h3 className="tag tag--sm"><i><Icon name="arrow" /></i>Visión</h3>
              <p>Ser reconocidos y lograr posicionarnos en la industria como empresa líder a nivel de Sudamérica.</p>
              <a className="btn btn--sky btn--sm" href="#servicios">Conoce más <i><Icon name="arrow" /></i></a>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
