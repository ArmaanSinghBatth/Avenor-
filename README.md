# Avenoré Digital Studio
1. `npm install`  2. `cp .env.example .env.local` (optional)  3. `npm run dev` (or `npm run build && npm start`)
- Projects: edit `src/lib/site.ts`. Screenshots go in `public/projects/` (`image: '/projects/name.webp'`, `aspect: 'wide' | 'tall'`). The grid arranges itself. `url` shows "View Project", `repo` shows "Source code".
- Contact form: no API key needed. Submissions are emailed to NEXT_PUBLIC_CONTACT_EMAIL (default avenorestudios@gmail.com) through FormSubmit. After deploying, submit the form once yourself, then click the activation link FormSubmit emails to that inbox. Check spam.
- Deploy to Vercel: import the repo, set NEXT_PUBLIC_SITE_URL to the live domain.
