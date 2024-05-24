# Development

The repository uses [Next.js](https://nextjs.org/) framework, so once you have some familiarity with it, it should be easy to work with this repository in general.

## Pre-requisites

- [Bun](https://bun.sh/) v1

## Quick start

Install dependencies:

```sh
bun i
```

Start local development server:

```sh
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser.

## Tauri

Make sure you got the [prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites) to be able run tauri commands.

### Development

```bash
bunx tauri dev
```

### Build

Check the full guide [here](https://tauri.app/v1/guides/building/)

```bash
bunx tauri build
```

the resulting build can be found in `./src-tauri/target/release`
