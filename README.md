# Prerana Acharyya — Portfolio

An editorial, responsive Next.js portfolio built around the story **“My degree has a branch. My curiosity doesn't.”**

## Run locally

Requirements: Node.js 20.9+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Personalise before publishing

1. **Add your portrait:** put your chosen photo at `public/images/prerana.jpg`. In `components/Portfolio.jsx`, replace the `.portrait-card__image` placeholder contents with an `<img src="/images/prerana.jpg" ... />`. The current PA monogram is intentionally a placeholder, not a generated likeness.
2. **Check contact details:** the email, phone, LinkedIn and GitHub links are taken from the supplied resume. Update them if you want different public contact details.
3. **Review project links:** the biomass notebook and football dashboard/repository links are taken from the resume's clickable links.
4. **Review project screenshots:** the project visuals are custom CSS illustrations. Replace them with real screenshots when you have preferred captures.
5. **Update metadata URL:** edit `metadataBase` in `app/layout.jsx` after you choose your final Vercel/custom domain.

## Structure

```text
app/
  globals.css       Responsive design system and page styling
  layout.jsx        Root layout and metadata
  page.jsx          Home route
components/
  Portfolio.jsx     Portfolio content and interactive components
public/
  resume.pdf        Resume supplied for this portfolio
```

## Design notes

- Editorial typography and generous whitespace
- Adaptive light/dark palette with a user-controlled display toggle
- Alternating warm-light and deep-green sections
- Chemistry-to-code vector illustration
- Interactive journey timeline and mini terminal
- Mobile navigation, responsive project cards, reduced-motion support
- No backend or environment variables required
