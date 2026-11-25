# The Excuse That Almost Works

[![make.fun](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)](https://make.fun/c/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![Rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/musengbob/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/rank.svg)](https://make.fun/c/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![Reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/musengbob/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/reward.svg)](https://make.fun/c/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)

Entry for the [make.fun bounty "The Excuse That Almost Works"](https://make.fun/c/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5): the one line a gamer texts the boss to skip work on GTA 6 launch week.

## The entry

> Sorry boss, gas safety check moved to this morning, legally I have to be home to let them in

## Why this one

A tired manager has heard every excuse twice and believes almost none of them. This one almost works because it is airtight on its own terms: a gas safety check is a legal obligation, the tenant has to be home to let the engineer in, and there is no workaround the boss can suggest. It is a real, specific, boring detail — not a dead grandmother, a flat tyre, or a sudden fever — and the laugh comes from the excuse's own logic: the most boring legal appointment imaginable landing exactly on launch week. One line, plain words, no setup, no explanation, no signature: a text sent in a hurry.

## How it works

`main.ts` writes the entry text to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to a local `output/` directory when the variable is unset). It validates the kit gate before writing: 1–140 characters, at most 20 words, a single line.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
