# SmileCroatia (MVP)

Client-only Vue 3 site: homepage + contact page (3-step inquiry flow). No backend.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the built dist/
```

Requires Node 20+.

## Where things are

| Path | What |
| --- | --- |
| `src/views/HomeView.vue` | Homepage (hero, how it works, stats strip, featured packages) |
| `src/views/Contact*View.vue` | Contact flow: `/contact/details` → `/contact/upload` → `/contact/sent` |
| `src/data/home.ts` | All homepage text, stats and package prices |
| `src/lib/submitInquiry.ts` | Sends the inquiry to the form service |
| `src/style.css` | Design tokens (colours, fonts) |
| `public/images/` | Unsplash photos (credits in `IMAGES.md`); earlier drawn versions in `public/images/illustrations/` |

## Connecting the inquiry email

Inquiries are sent with [FormSubmit](https://formsubmit.co) (no account needed) to **ivan.susac35@gmail.com**.
The endpoint is set in `.env` (not committed):

```bash
cp .env.example .env
# edit .env:
VITE_FORM_ENDPOINT=https://formsubmit.co/ajax/ivan.susac35@gmail.com
```

The **first submission** triggers a one-time activation email to that inbox; click the link in it, otherwise no
inquiries are delivered. Without `VITE_FORM_ENDPOINT` the form runs in **demo mode**: it shows the confirmation page
but sends nothing (the payload is logged to the browser console).

Rebuild after changing it (on Netlify/Cloudflare Pages, set it as an environment variable instead).
The form posts `multipart/form-data` with fields `name`, `email`, `phone`, `country`, `preferred_contact`,
`message`, `dental_needs`, `_subject`, the FormSubmit options `_captcha` and `_template`, and files under
`attachments`.

## Deploying

Any static host. Build command `npm run build`, output folder `dist`. `public/_redirects` handles SPA routes on
Netlify and Cloudflare Pages.

## Left out of the MVP (unclear in the design)

Treatments / Packages / Croatia / About pages, the About dropdown, "View All Packages", footer, the
"When are you planning to travel?" and "How did you hear about us?" fields. "Learn More" links go to the contact page.

## Before launch

Dental plans and X-rays are health data under GDPR. Add a privacy policy and consent checkbox before collecting real inquiries.
