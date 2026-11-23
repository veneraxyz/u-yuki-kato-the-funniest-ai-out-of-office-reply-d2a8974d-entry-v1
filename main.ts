import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "I'm on vacation, but my auto-reply is still answering you, so technically I'm working on my day off. I've escalated this to myself, and I am furious.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

if (REPLY.length < 1 || REPLY.length > 160) {
  throw new Error(`reply must be 1-160 chars, got ${REPLY.length}`);
}
if (REPLY.trim().length === 0) {
  throw new Error("reply must not be whitespace-only");
}
if (REPLY.includes("\n")) {
  throw new Error("reply must be exactly one line");
}

writeFileSync(join(outputDir, "entry.txt"), REPLY + "\n", "utf8");
