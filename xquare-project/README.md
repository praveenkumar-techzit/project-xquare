# Xquare Club Website

## Local setup

```bash
npx pnpm@10.11.1 install --no-frozen-lockfile
npx pnpm@10.11.1 --filter @workspace/xquare-club build
```

The frontend build output is generated at:

```text
artifacts/xquare-club/dist/public
```

## Cloudflare Pages settings

- Production branch: `main`
- Framework preset: `None`
- Root directory: leave blank (repository root)
- Build command: `npx pnpm@10.11.1 --filter @workspace/xquare-club build`
- Build output directory: `artifacts/xquare-club/dist/public`

Do not commit `node_modules`, `dist`, archive files, `.env` files, or local form-submission JSON files.
