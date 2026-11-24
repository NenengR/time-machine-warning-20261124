// Funniest Time Machine Warning Label: one line, at most 120 characters.
// The warning reads like a genuine safety notice while the punch lands
// on the last words: your past self is a debtor who knows where you live.
// Revision note: phrasing kept word for word; only this comment changed.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "WARNING: Do not meet your past self. He owes you money, and he knows where you live.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
