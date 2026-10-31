import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon.jsx';
import { PRODUCTS, REDUCED_MOTION, SERVICES } from '../data/site.js';

const normalize = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const INDEX = [
  ...SERVICES.map((item) => ({ ...item, type: 'Servicio' })),
  ...PRODUCTS.map((item) => ({ ...item, type: 'Producto' })),
].map((item) => ({ ...item, key: normalize(item.title) }));

export default function Search() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const form = useRef(null);

  const words = normalize(query.trim()).split(/\s+/).filter(Boolean);
  const hits = words.length ? INDEX.filter((item) => words.every((w) => item.key.includes(w))) : [];

  useEffect(() => {
    const onClick = (e) => { if (!form.current.contains(e.target)) setOpen(false); };
    const onKeyDown = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const goTo = (item) => {
    setOpen(false);
    setQuery('');
    const el = document.getElementById(item.id);
    el.scrollIntoView({ behavior: REDUCED_MOTION ? 'auto' : 'smooth', block: 'center' });
    el.classList.remove('is-found');
    void el.offsetWidth;
    el.classList.add('is-found');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!words.length) return;
    if (hits.length) goTo(hits[0]);
    else setOpen(true);
  };

  return (
    <form className="search" id="search" role="search" ref={form} onSubmit={onSubmit}>
      <input
        id="q"
        type="search"
        placeholder="Buscar"
        aria-label="Buscar productos y servicios"
        autoComplete="off"
        value={query}
        onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
      />
      <Icon name="search" aria-hidden="true" />
      <ul className="search__res" id="res" hidden={!open || !words.length}>
        {hits.map((item) => (
          <li key={item.id}>
            <button type="button" onClick={() => goTo(item)}><small>{item.type}</small>{item.title}</button>
          </li>
        ))}
        {words.length > 0 && !hits.length && <li className="none">Sin resultados. Escríbenos y lo importamos bajo pedido.</li>}
      </ul>
    </form>
  );
}
