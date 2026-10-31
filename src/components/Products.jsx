import { useState } from 'react';
import { Icon } from './Icon.jsx';
import ProductModal from './ProductModal.jsx';
import Reveal from './Reveal.jsx';
import { PRODUCTS, SECTORS, whatsappWith } from '../data/site.js';

export default function Products() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="products" id="productos">
      <div className="wrap">
        <div className="products__panel">
          <Reveal as="header" className="head head--light"><h2>Productos</h2></Reveal>
          <Reveal className="sectors">
            <strong>Sector <br />industrial:</strong>
            <ul>
              {SECTORS.map((sector) => <li key={sector}>{sector}</li>)}
            </ul>
          </Reveal>
          <div className="grid grid--3">
            {PRODUCTS.map((product, i) => (
              <Reveal as="button" type="button" className="card card--prod" id={product.id} delay={i} key={product.id} onClick={() => setSelected(product)}>
                <span className="card__img"><img loading="lazy" src={product.img} alt={product.alt} /></span>
                <h3>{product.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="pills">
          <a className="btn btn--red btn--lg" href={whatsappWith('Hola, quisiera consultar por la cobertura y logística de envíos.')} target="_blank" rel="noopener"><Icon name="globe" />Cobertura y logística</a>
          <a className="btn btn--red btn--lg" href="#especial"><Icon name="plane" />Importaciones personalizadas</a>
        </Reveal>
      </div>
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
