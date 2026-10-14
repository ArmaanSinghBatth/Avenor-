'use client';
import { useEffect } from 'react';
export default function Reveal() {
  useEffect(() => {
    document.documentElement.classList.add('js');
    const els = document.querySelectorAll('.rv');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { threshold: 0.1 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return null;
}
