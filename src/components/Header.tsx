'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const links = [['Work', '#work'], ['Services', '#services'], ['Process', '#process'], ['About', '#about'], ['Contact', '#contact']];
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    f(); window.addEventListener('scroll', f, { passive: true }); window.addEventListener('keydown', k);
    return () => { window.removeEventListener('scroll', f); window.removeEventListener('keydown', k); };
  }, []);
  return (
    <header id="h" className={`${scrolled ? 's ' : ''}${open ? 'm' : ''}`}>
      <div className="hb">
        <a className="brand" href="#top" aria-label="Avenoré Digital Studio, back to top">
          <Image className="mono-img" src="/logo.webp" alt="" width={360} height={253} />
          <span><b>AVENORÉ</b><small>Digital Studio</small></span>
        </a>
        <nav id="nv" className={open ? 'o' : ''} aria-label="Primary">
          <ul>{links.map(([n, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)}>{n}</a></li>)}</ul>
          <a className="btn sm" href="#contact" onClick={() => setOpen(false)}>Start a Project ↗</a>
        </nav>
        <button id="mb" type="button" aria-expanded={open} aria-controls="nv" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </div>
    </header>
  );
}
