// Generates labelled SVG placeholder images. Replace the files in public/images with real photos later.
import { writeFileSync } from 'node:fs'
const imgs = [
  ['hero', 1600, 1200, 'Hero photo: smiling woman, Dubrovnik coast'],
  ['step-upload', 800, 520, 'Dentist with patient'],
  ['step-offer', 800, 520, 'Dental X-ray on laptop'],
  ['step-travel', 800, 520, 'Couple overlooking old town'],
  ['package-crowns', 800, 400, 'Dental crowns'],
  ['package-implants', 800, 400, 'Dental implant'],
  ['package-makeover', 800, 400, 'Full smile makeover'],
]
for (const [name, w, h, label] of imgs) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#dfe7ee"/><stop offset="1" stop-color="#c3d2df"/></linearGradient></defs>
<rect width="100%" height="100%" fill="url(#g)"/>
<g fill="none" stroke="#8a9bb0" stroke-width="${Math.round(w / 200)}" transform="translate(${w / 2 - w / 16} ${h / 2 - w / 16 - h / 20})">
<rect width="${w / 8}" height="${w / 10}" rx="${w / 100}"/><circle cx="${w / 26}" cy="${w / 30}" r="${w / 110}"/><path d="M0 ${w / 12} L${w / 24} ${w / 22} L${w / 12} ${w / 13} L${w / 8} ${w / 28}"/>
</g>
<text x="50%" y="${h / 2 + w / 14}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.round(w / 34)}" fill="#5b6b80">${label}</text>
<text x="50%" y="${h / 2 + w / 14 + w / 26}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.round(w / 48)}" fill="#7d8ca0">placeholder</text>
</svg>`
  writeFileSync(`public/images/${name}.svg`, svg)
}
