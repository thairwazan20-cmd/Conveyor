import { useEffect, useRef } from 'react';
import { Icon } from './Icon.jsx';
import { whatsappWith } from '../data/site.js';

export default function ProductModal({ product, onClose }) {
  const dialog = useRef(null);

  useEffect(() => {
    if (product) dialog.current.showModal();
  }, [product]);

  const close = () => dialog.current.close();

  return (
    <dialog className="modal" ref={dialog} aria-labelledby="modalTitle" onClose={onClose} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      {product && (
        <>
          <button className="modal__close" aria-label="Cerrar" onClick={close}>×</button>
          <img src={product.img} alt={product.alt} />
          <div className="modal__body">
            <h3 id="modalTitle">{product.title}</h3>
            <p>Cuéntanos la medida y aplicación que necesitas y un asesor te enviará tu cotización.</p>
            <a className="btn btn--red" href={whatsappWith(`Hola, quisiera cotizar: ${product.title}.`)} target="_blank" rel="noopener"><Icon name="whatsapp" />Cotizar por WhatsApp</a>
          </div>
        </>
      )}
    </dialog>
  );
}
