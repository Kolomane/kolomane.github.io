// Browser-side inverse of encode.ts. Contains no content, only the decoder.
import type { Chunk } from './encode';

function unrot(text: string, shift: number): string {
  let out = '';
  for (const ch of text) {
    const c = ch.charCodeAt(0);
    if (c >= 97 && c <= 122) out += String.fromCharCode(((c - 97 - shift + 26) % 26) + 97);
    else if (c >= 65 && c <= 90) out += String.fromCharCode(((c - 65 - shift + 26) % 26) + 65);
    else out += ch;
  }
  return out;
}

const utf8 = new TextDecoder();
const fromB64 = (b64: string) => utf8.decode(Uint8Array.from(atob(b64), (c) => c.charCodeAt(0)));

export function decodePayload<T>(raw: string): T {
  const chunks = (JSON.parse(raw) as Chunk[]).filter((c) => c.i >= 0).sort((a, b) => a.i - b.i);
  return JSON.parse(chunks.map((c) => unrot(fromB64(c.d), c.r)).join('')) as T;
}
