import { ImageResponse } from 'next/og';
export const alt = 'Avenoré Digital Studio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', background: '#0E0E0E', color: '#F5F0E8', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 80, border: '1px solid #C9BCA8' }}>
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 8, color: '#8B867C' }}>AVENORÉ · DIGITAL STUDIO</div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 88, lineHeight: 1.05 }}>
          <span>Digital experiences,</span><span style={{ color: '#C9BCA8', fontStyle: 'italic' }}>thoughtfully built.</span>
        </div>
      </div>
    ),
    size
  );
}
