import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Pass the directory containing the original Image Gen outputs. No source file
// is modified: this makes optimized copies and records their web dimensions.
const source = process.argv[2];
if (!source) throw new Error('Usage: node scripts/prepare-assets.mjs <generated-image-directory>');
const assets = [
  ['exec-3fb5b552-130b-4a1c-93a0-4e08dfd73dfa.png', 'hero/hero-mobile.webp', 800],
  ['exec-6fadad43-c389-49f6-a968-51946289f662.png', 'hero/hero-desktop.webp', 1920],
  ['exec-58cfd962-5e2d-4d83-ba97-406fa1a5ea39.png', 'ingredients/ingredients.webp', 1000],
  ['exec-5a0dcd66-bb8b-47c4-96ee-60429453f615.png', 'products/arracacha.webp', 1000],
  ['exec-08537e0c-85ad-4b57-addc-79901fdc6f0f.png', 'products/choclo.webp', 1000],
  ['exec-32a4bfc7-2301-4a5f-9309-4755c4936876.png', 'hero/subscription.webp', 1200],
];
const inventory = [];
for (const [file, target, width] of assets) {
  const destination = path.join('public/assets', target);
  await mkdir(path.dirname(destination), { recursive: true });
  const info = await sharp(path.join(source, file)).resize({ width, withoutEnlargement: true }).webp({ quality: 85 }).toFile(destination);
  inventory.push({ path: destination, width: info.width, height: info.height, bytes: info.size, status: 'AI-generated concept, not final packaging' });
}
await writeFile('docs/design/asset-manifest.json', JSON.stringify(inventory, null, 2) + '\n');
console.log(inventory);
