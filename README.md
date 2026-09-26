# Harbor & Oak — Ecommerce Storefront

Production-style ecommerce UI: catalog filters, product galleries, cart drawer, multi-step checkout, and a light admin products table.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Client-side cart state

## Pages

- `/` — brand home
- `/shop` — filters + grid
- `/product/[id]` — product detail
- `/checkout` — shipping → payment → review
- `/admin` — products table
