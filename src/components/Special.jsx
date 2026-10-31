import { Icon } from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { whatsappWith } from '../data/site.js';

export default function Special() {
  return (
    <section className="special" id="especial">
      <Reveal className="special__text from-left">
        <h2 className="tag tag--light"><i><Icon name="arrow" /></i>¿Necesitas un producto especial?</h2>
        <p>Si no encuentras el suministro o la medida en nuestro catálogo, coordinamos una <b>importación personalizada bajo pedido</b> adaptada a las especificaciones técnicas de tu maquinaria.</p>
        <a className="btn btn--red" href={whatsappWith('Hola, necesito un producto especial bajo pedido.')} target="_blank" rel="noopener"><Icon name="whatsapp" />Contáctanos</a>
      </Reveal>
      <div className="special__img"><img loading="lazy" src="assets/img/local.webp" alt="Local de Conveyor Belt Group con su equipo y vehículos" /></div>
    </section>
  );
}
