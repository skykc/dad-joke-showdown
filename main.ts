// Dad Joke Showdown — u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes one dad joke (<= 200 characters) to entry.txt.
//
// The joke: a father grounding his AI-agent "kid" for hallucinating.
// "Grounded" does double duty — a kid grounded by Dad, and AI grounding,
// the fix for hallucinating. Setup in one clause, payoff at the end,
// reads aloud like a father telling it at the table.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  `I asked my AI agent for a dad joke. It said, "I'd love to, Dad, but you grounded me for hallucinating."`;

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

// Self-check the house gate before writing: UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly instead of shipping
// an entry the scorer would list as invalid with no rate.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  console.error(
    `entry invalid: ${JOKE.length} characters, must be 1-200 and non-blank`,
  );
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote entry.txt (${JOKE.length} characters)`);
