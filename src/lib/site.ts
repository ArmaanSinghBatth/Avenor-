export const site = {
  name: 'Avenoré Digital Studio',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'avenorestudios@gmail.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
  github: process.env.NEXT_PUBLIC_GITHUB_URL || '',
};

export type Project = {
  name: string; category: string; description: string;
  tech: string[]; type?: 'Personal' | 'Academic' | 'Concept' | 'Client';
  url?: string; repo?: string; image?: string; aspect?: 'wide' | 'tall';
};

/* Only real details here. Empty fields are hidden. url must be a live link. */
export const projects: Project[] = [
  { name: 'Safe Data', category: 'Image steganography tool', description: 'A tool for concealing information within images.', tech: [], image: '/projects/safe-data.webp', aspect: 'wide', url: 'https://safedata2.vercel.app/' },
  { name: 'Chunky Cookies', category: 'Website project', description: 'A Clients Website.', tech: [], type: 'Client', image: '/projects/chunky.webp', aspect: 'tall', url: 'https://chunky-cookies2.vercel.app/' },
  { name: 'Falcon Security Systems', category: 'Security Systems company', description: 'A Clients Platform.', tech: [], type: 'Client', image: '/projects/falcon.webp', aspect: 'tall', url: 'https://falcon-batth.vercel.app/' },
  { name: 'SewaSetu', category: 'Community service platform', description: 'A Community service platform.', tech: [], image: '/projects/sewa-setu.webp', aspect: 'wide' },
  { name: 'FinAI', category: 'Cloud-based finance assistant', description: 'A cloud-based finance assistant.', tech: [], image: '/projects/fin-ai.webp', aspect: 'wide' },
  { name: 'Chunky Cookies 2', category: 'Website project', description: 'A Clients Website.', tech: [], type: 'Client', image: '/projects/chunky2.webp', aspect: 'tall', url: 'https://chunkycookies.vercel.app/' },
];

/* Only real http(s) links render. 'github.com/x' is fixed to https; anything malformed is dropped, so buttons never break. */
export const safeUrl = (u?: string) => {
  if (!u) return '';
  try { const x = new URL(/^https?:\/\//i.test(u.trim()) ? u.trim() : `https://${u.trim()}`); return x.href; } catch { return ''; }
};
