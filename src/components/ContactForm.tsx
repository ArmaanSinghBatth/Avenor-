'use client';
import { FormEvent, useState } from 'react';
import { site } from '@/lib/site';
const email = site.email;
type K = 'name' | 'email' | 'service' | 'details';
const rules: Record<K, (v: string) => string> = {
  name: (v) => (v.trim() ? '' : 'Enter your name.'),
  email: (v) => (/^\S+@\S+\.\S+$/.test(v.trim()) ? '' : 'Enter a valid email address, like name@example.com.'),
  service: (v) => (v ? '' : 'Choose the service you need.'),
  details: (v) => (v.trim().length >= 10 ? '' : 'Add a few details about your project (at least 10 characters).'),
};
const services = ['Website design and development', 'Landing page', 'Web application', 'Deployment and cloud', 'Maintenance and support', 'Not sure yet'];

export default function ContactForm() {
  const [errs, setErrs] = useState<Partial<Record<K, string>>>({});
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'fail'>('idle');
  const [msg, setMsg] = useState('');
  const a = (k: K) => ({ 'aria-invalid': !!errs[k], 'aria-describedby': `e-${k}` });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const next: Partial<Record<K, string>> = {};
    let first = '';
    (Object.keys(rules) as K[]).forEach((k) => { const m = rules[k](d[k] || ''); if (m) { next[k] = m; if (!first) first = k; } });
    setErrs(next);
    if (first) { (form.elements.namedItem(first) as HTMLElement)?.focus(); setState('idle'); setMsg(''); return; }
    setState('sending'); setMsg('');
    try {
      if (!d.website) { // hidden "website" field filled = bot, skip sending
        const r = await fetch(`https://formsubmit.co/ajax/${email}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: d.name, email: d.email, project: d.project || '-', service: d.service, budget: d.budget || '-', message: d.details,
            _subject: `New project enquiry${d.project ? ` – ${d.project}` : ''}`, _template: 'table', _captcha: 'false',
          }),
        });
        const j = await r.json().catch(() => ({}));
        if (!r.ok || j.success === false || j.success === 'false') throw new Error('We could not send your message. Please try again shortly.');
      }
      form.reset(); setState('ok'); setMsg('Thank you. Your enquiry has been sent, and we will reply by email.');
    } catch (err) {
      setState('fail'); setMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Project enquiry">
      <div className="fl"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" {...a('name')} /><span className="er" id="e-name">{errs.name}</span></div>
      <div className="fl"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" {...a('email')} /><span className="er" id="e-email">{errs.email}</span></div>
      <div className="fl"><label htmlFor="project">Business or project name (optional)</label><input id="project" name="project" /></div>
      <div className="fl"><label htmlFor="service">Service required</label>
        <select id="service" name="service" defaultValue="" {...a('service')}><option value="">Select a service</option>{services.map((s) => <option key={s}>{s}</option>)}</select>
        <span className="er" id="e-service">{errs.service}</span></div>
      <div className="fl"><label htmlFor="budget">Estimated budget (optional)</label><input id="budget" name="budget" /></div>
      <div className="fl"><label htmlFor="details">Project details</label><textarea id="details" name="details" {...a('details')} /><span className="er" id="e-details">{errs.details}</span></div>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div><button className="btn solid" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send enquiry ↗'}</button></div>
      <p className={state === 'fail' ? 'er' : 'ok'} role={state === 'fail' ? 'alert' : 'status'} aria-live="polite">
        {msg}{state === 'fail' && email && <> You can also email <a href={`mailto:${email}`}>{email}</a>.</>}
      </p>
    </form>
  );
}
