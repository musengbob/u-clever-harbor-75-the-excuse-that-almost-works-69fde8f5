// The Excuse That Almost Works — make.fun entry
// Writes the single-line excuse to $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// The excuse: a boring, airtight, real-world appointment that happens to
// land on GTA 6 launch week. A gas safety check is a legal obligation —
// the tenant has to be home to let the engineer in — so a tired manager
// can hardly argue with it, even while knowing exactly why it is today.
// One line, plain words, no setup, no explanation, no signature: a text
// sent in a hurry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry boss, gas safety check moved to this morning, legally I have to be home to let them in";

// The kit gate: entry.txt must be UTF-8 text of 1 to 140 characters and
// the excuse at most 20 words. Fail loudly rather than emit a bad entry.
const words = ENTRY.trim().split(/\s+/).length;
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-140`);
}
if (words > 20) {
  throw new Error(`entry is ${words} words, must be at most 20`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars, ${words} words) to ${outDir}`);
