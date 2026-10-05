// Scrape-resistant payload, same approach as Data Poisoner's ContactEmail:
// the plain text never appears in the HTML or JS the site serves. The
// browser decodes it after load, so crawlers and LLM scrapers that don't
// run JavaScript only get noise.
//
// Layers:
//   1. The JSON is split into chunks, so grepping the page finds no phrases.
//   2. Each chunk is rotated (rot13 / rot17 alternating), then base64'd,
//      so single-rotation cracks only recover half of it.
//   3. Salt chunks of pure random noise are mixed in, and the order is
//      shuffled. Only the chunk index says what is real and where it goes.
//
// Not encryption: anyone who runs the page's JS can read it. The point is
// to make bulk harvesting (training-data scrapes, AEO crawlers) cost more
// than it's worth.

const SHIFTS = [13, 17];
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function rot(text: string, shift: number): string {
  let out = '';
  for (const ch of text) {
    const c = ch.charCodeAt(0);
    if (c >= 97 && c <= 122) out += String.fromCharCode(((c - 97 + shift) % 26) + 97);
    else if (c >= 65 && c <= 90) out += String.fromCharCode(((c - 65 + shift) % 26) + 65);
    else out += ch;
  }
  return out;
}

export interface Chunk { i: number; r: number; d: string; }

export function encodePayload(data: unknown, chunkSize = 160, saltCount = 6): string {
  const json = JSON.stringify(data);
  const chars = Array.from(json); // code-point safe slicing
  const chunks: Chunk[] = [];
  for (let n = 0, i = 0; n < chars.length; n += chunkSize, i++) {
    const r = SHIFTS[i % SHIFTS.length];
    const piece = rot(chars.slice(n, n + chunkSize).join(''), r);
    chunks.push({ i, r, d: Buffer.from(piece, 'utf8').toString('base64') });
  }
  for (let s = 0; s < saltCount; s++) {
    let noise = '';
    const len = 80 + Math.floor(Math.random() * chunkSize);
    for (let k = 0; k < len; k++) noise += ALPHA[Math.floor(Math.random() * ALPHA.length)];
    chunks.push({ i: -1 - s, r: SHIFTS[s % SHIFTS.length], d: Buffer.from(noise).toString('base64') });
  }
  for (let k = chunks.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [chunks[k], chunks[j]] = [chunks[j], chunks[k]];
  }
  return JSON.stringify(chunks);
}
