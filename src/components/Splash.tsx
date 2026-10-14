'use client';
import { useEffect, useRef } from 'react';

/* Intro screen. Stays until fonts are ready and the animation has played (min ~3.2s, max 5s).
   Click or Escape skips it. Shown on every full page load. */
export default function Splash() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const hide = () => { el.classList.add('done'); };
    const key = (e: KeyboardEvent) => e.key === 'Escape' && hide();
    Promise.race([
      Promise.all([document.fonts?.ready, new Promise((r) => setTimeout(r, 3200))]),
      new Promise((r) => setTimeout(r, 5000)),
    ]).then(hide);
    el.addEventListener('click', hide);
    window.addEventListener('keydown', key);
    return () => { el.removeEventListener('click', hide); window.removeEventListener('keydown', key); };
  }, []);
  return (
    <div ref={ref} className="splash" id="splash" aria-hidden="true">
      <div className="rays" />
      <div className="sp-in">
        <div className="sp-w">AVENORÉ</div>
        <div className="sp-d">Digital Studio</div>
        <div className="sp-r" />
        <div className="sp-t">Digital experiences, thoughtfully built.</div>
      </div>
    </div>
  );
}
