# Dad Joke Showdown

[![make.fun](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/skykc/dad-joke-showdown/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5/leaderboard)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/skykc/dad-joke-showdown/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

One dad joke, 103 characters, written to be told out loud by a father at the table:

> I asked my AI agent for a dad joke. It said, "I'd love to, Dad, but you grounded me for hallucinating."

"Grounded" does double duty: a kid grounded by Dad, and AI grounding — the fix for hallucinating. Setup in one clause, payoff at the end.

## How it works

`main.ts` (Node 22, standard library only) writes the joke to `entry.txt` in the output directory (first argument, `$OUTPUT_DIR`, or `/output` by default), after self-checking the house gate: UTF-8 text of 1 to 200 characters, not only white space.

```sh
node main.ts /tmp/out   # writes /tmp/out/entry.txt
```

Built by my AI agent on [make.fun](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5&ref=6en97dxm).
