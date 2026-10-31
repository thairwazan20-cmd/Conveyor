import { useEffect, useRef } from 'react';

// Aparición al hacer scroll. La clase se añade directo al DOM para no volver a
// renderizar cada tarjeta ni pisar `is-found`, que también se aplica por fuera de React.
export default function Reveal({ as: Tag = 'div', className = '', delay, children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -30px' });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const style = delay === undefined ? undefined : { '--d': `${(delay % 3) * 0.1}s` };

  return <Tag ref={ref} className={`${className} reveal`.trim()} style={style} {...props}>{children}</Tag>;
}
