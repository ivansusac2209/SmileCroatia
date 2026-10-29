# SmileCroatia

Vue 3 + Vite dental tourism website. The contact flow submits inquiries through a Cloudflare Worker and Resend.

## Run locally

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Inquiry email setup (Cloudflare Worker + Resend)

The browser sends the contact form to the same-origin `/api/inquiry` Worker endpoint. The Worker validates the input and optional files, then sends the inquiry using the Resend API. The Resend API key is only used server-side and must never be exposed through a `VITE_*` variable or committed to Git.

### One-time production setup

1. Create a Resend account at https://resend.com/.
2. Add and verify a domain you control in Resend. Use a sender address on that verified domain.
3. In Cloudflare Dashboard, open **Workers & Pages → smilecroatia → Settings → Variables and Secrets** (or the equivalent bindings section). Add:
   - **Secret** `RESEND_API_KEY`: the API key from Resend.
   - **Variable** `RESEND_FROM_EMAIL`: a sender on the verified domain, e.g. `SmileCroatia <inquiries@your-verified-domain.com>`.
   - **Variable** `RESEND_TO_EMAIL`: the inbox that receives inquiries, e.g. `ivan.susac35@gmail.com`.
4. Save and redeploy the Worker.
5. Submit a text-only test inquiry, then a small PNG. Confirm the message and attachment arrive in the recipient inbox and check Resend's email logs.

A successful browser response means Resend accepted the email request; it does not guarantee final inbox delivery. Resend requires a properly configured sender domain for production sending. Check current plan limits at https://resend.com/pricing.

## Upload limits

The form accepts PDF, JPG/JPEG, PNG, WEBP and DICOM files. The Worker enforces a maximum of 5 files, 5 MB per file and 8 MB combined. Uploaded files are attached to the email and are not stored by this application.

## Privacy

Dental plans and scans may contain sensitive health data. Confirm that the privacy notice, retention practices and chosen email provider are appropriate before collecting real patient records. Email attachments are not a secure medical-record portal.
