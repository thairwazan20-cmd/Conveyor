import { useEffect } from 'react';

// Ejecuta `callback` como máximo una vez por frame mientras se hace scroll.
// `callback` debe ser estable (useCallback).
export function useScrollFrame(callback) {
  useEffect(() => {
    let ticking = false;
    const run = () => {
      callback();
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(run);
      }
    };
    addEventListener('scroll', onScroll, { passive: true });
    run();
    return () => removeEventListener('scroll', onScroll);
  }, [callback]);
}
