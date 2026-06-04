# VibraFlow Industrial Website

Production-ready Next.js 15 website for a vibratory bowl feeder and industrial automation equipment manufacturer.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase-ready RFQ persistence
- Resend-ready RFQ email delivery
- Static generation, sitemap, robots, manifest, schema markup

## Run Locally

```bash
npm install
npm run dev
```

Production preview:

```bash
npm run build
npm run start
```

## Environment

Copy `.env.example` to `.env.local` and configure the values you need.

The RFQ API works without external services. If Supabase or Resend variables are present, it will also store inquiries and send notification email.

## Supabase Table

Create this table if you want RFQ persistence:

```sql
create table rfq_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  company text not null,
  email text not null,
  phone text,
  product_type text,
  target_feed_rate text,
  requirement text not null,
  source text,
  attachment_name text
);
```

## SEO

The site includes:

- Organization, Product, Breadcrumb, FAQ, ItemList, Article, Service schema
- Canonical URLs
- Open Graph and Twitter Cards
- Dynamic sitemap and robots
- Manifest
- Product and industry static generation

Update `NEXT_PUBLIC_SITE_URL` before deploying to production.
