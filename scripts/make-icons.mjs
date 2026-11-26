// Renders favicon.svg, apple-touch-icon.png and og.png from the SlidePilot glyph.
// Run with: node scripts/make-icons.mjs
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';

const src = readFileSync(new URL('../src/components/logoPaths.ts', import.meta.url), 'utf8');
const HUB = src.match(/HUB = '([^']+)'/)[1];
const HORNS = src.match(/HORNS = '([^']+)'/)[1];

const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 1024 1024">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="0.7"><stop offset="0" stop-color="#3da8ff"/><stop offset="1" stop-color="#0057f0"/></linearGradient>
    <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#b8dcff"/></linearGradient>
  </defs>
  <rect width="1024" height="1024" rx="230" fill="url(#bg)"/>
  <g transform="translate(512 512) scale(1.05) translate(-512 -492)"><path d="${HORNS}" fill="url(#fg)"/><path d="${HUB}" fill="url(#fg)"/></g>
</svg>`;

writeFileSync(new URL('../public/favicon.svg', import.meta.url), icon(64));
await sharp(Buffer.from(icon(180).replace('rx="230"', 'rx="0"'))).png().toFile('public/apple-touch-icon.png');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="50%" cy="42%" r="55%"><stop offset="0" stop-color="#1f5fe0" stop-opacity=".55"/><stop offset="1" stop-color="#06070a" stop-opacity="0"/></radialGradient>
    <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8ccaff"/><stop offset="1" stop-color="#1557e8"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#06070a"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g transform="translate(600 250) scale(0.42) translate(-512 -492)"><path d="${HORNS}" fill="url(#fg)"/><path d="${HUB}" fill="url(#fg)"/></g>
  <text x="600" y="470" text-anchor="middle" font-family="Helvetica Neue, Arial, sans-serif" font-size="76" font-weight="700" fill="#fff" letter-spacing="-2">SlidePilot</text>
  <text x="600" y="530" text-anchor="middle" font-family="Helvetica Neue, Arial, sans-serif" font-size="30" fill="#a7afbd">The PDF presenter for Mac, iPad and iPhone</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile('public/og.png');
console.log('icons written');
