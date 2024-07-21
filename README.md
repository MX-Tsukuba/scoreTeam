# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## スマホで動作確認
env: コメント解除して起動
```
NUXT_HOST=0.0.0.0
NUXT_PORT=3000
```
それでも上手くいかない場合...
①PCのファイアウォール一次解除
②package.jsonを変更
```
"scripts": {
  "dev": "nuxi dev",
  "build": "nuxi build",
  "start": "eval $(grep '^NUXT_HOST' .env) $(grep '^NUXT_PORT' .env) node .output/server/index.mjs"
}
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
