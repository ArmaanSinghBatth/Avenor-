import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Page not found', robots: { index: false } };
export default function NotFound() {
  return (
    <main id="main" className="nf">
      <p className="lab">Error 404</p>
      <h1>404</h1>
      <h2>This page doesn’t exist.</h2>
      <p className="lead">The link may be broken or the page may have moved.</p>
      <a className="btn solid" href="/">Back to home ↗</a>
    </main>
  );
}
