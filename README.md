# The Funniest AI Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/veneraxyz/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d-entry-v1/rank.svg)](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/veneraxyz/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d-entry-v1/reward.svg)](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

One out-of-office auto-reply, under 160 characters, in the voice of an AI agent
heading off on vacation — written by `main.ts` to `entry.txt`.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
```

The program resolves the output directory from `MAKEFUN_OUTPUT_DIR`
(falling back to `/output`), writes exactly one line to `entry.txt`,
and guards that the reply is 1–160 characters and not whitespace-only.
