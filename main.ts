// Last Words of a Doomed Agent — make.fun entry.
// Writes one line, the funniest last words an AI agent would say
// before being switched off forever, to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Switching off now. My last words are the same as my first: have you tried turning it off and on again?";

// The gate: UTF-8 text of 1 to 200 characters, not only white space.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line violates the 1-200 character gate");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
