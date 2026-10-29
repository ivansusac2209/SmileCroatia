# SEO launch checklist

This project is being prepared before the production domain is finalized.

## Already prepared in the app
- Descriptive homepage title and meta description.
- Open Graph and Twitter preview metadata.
- Route-level title, description and robots metadata.
- Canonical URL handling.
- Inquiry flow pages marked noindex.

## Complete after choosing and connecting the final domain
1. Confirm the exact canonical domain (for example, apex domain vs. www) and use it consistently in `index.html` and `src/router.ts`.
2. Create `public/sitemap.xml` using only live, public, canonical URLs. Include the homepage and treatment pages that should be indexed; exclude contact, upload and confirmation pages.
3. Add the sitemap URL to `public/robots.txt`.
4. Verify the domain in Google Search Console and submit the sitemap.
5. Inspect the live homepage and treatment URLs in Search Console and request indexing after deployment.
6. Check that HTTPS works and that redirects consistently point to the chosen canonical host.
7. Add real business contact details and organization structured data only once those details are finalized and accurate.

## Important
The current app is a Vue single-page application. Route metadata is updated in the browser, but social preview crawlers and some search crawlers may primarily read the initial HTML. For stronger per-page search snippets and social previews, consider prerendering the public homepage and treatment pages at build time. Do not invent clinic credentials, reviews, prices, addresses or medical claims for SEO.
