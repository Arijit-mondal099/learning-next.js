# Learing Next.js

Next.js is a react framework for building full-stack web application.

## What is Next.js?

React isn't feasible to create fully-featured application ready for production.

React is a library for building user interfaces (components).

In react you have to make decisions about other features such as routing, data fetching and more.

Next.js uses react for building interfaces.

Next.js provides additional featires that enable you to build production-ready applications.

You don't need to install additional packages (external) as next.js provides everything you need.

## Why learn Next.js?

Next.js simplifies the process of building production-ready web appliction.

1. App Routing (file based)
2. API Routes
3. Rendering (CSR, SSR)
4. Data Fetching
5. Optimizations (components)

## React Server Components (RSC)

React server compoents is a new architecture that was introduced by the react team and quickly adopted by nextjs.

1. Server Components
2. Client Components

### Server Compenents: 'use server'

- By default all components are server components in nextjs
- These compoenents can perform server-side taks like reading file or featching data directly from db and also we can do db quires in side an server compoent and more.
- Inside server components we can't use react hooks and browser API's (can't handle user interactions).

### Client Components: 'use client'

- To craete client component, you'll need to add 'use client' directive at the top of your component file.
- We can't perform server-side tasks inside client compoent.
- We can use react hooks and browser API's (traditional react component).

## Routing (App Router)

Next.js uses a **file-system based routing system**, meaning the structure of your `app/` folder directly defines the URLs of your application.  
This approach makes routing **automatic, predictable, and easy to scale**.

---

### Basic Concept

Every folder inside the `app/` directory becomes a **URL segment**  
Every `page.tsx` (or `page.js`) file becomes a **route**.

### Example Structure

```text
app/
│
├── layout.tsx                  → Global layout (root layout)
├── page.tsx                    → "/" (Home route)
├── loading.tsx                 → Global loading UI
├── error.tsx                   → Global error UI
├── not-found.tsx               → Global 404 page
│
├── about/
│   ├── page.tsx                → "/about"
│   └── layout.tsx              → Layout for /about
│
├── blog/
│   ├── page.tsx                → "/blog"
│   │
│   ├── [slug]/                 → Dynamic route
│   │   ├── page.tsx            → "/blog/:slug"
│   │   ├── loading.tsx         → Loading for blog slug
│   │   └── error.tsx           → Error for blog slug
│   │
│   ├── [...all]/               → Catch-all route
│   │   └── page.tsx            → "/blog/*"
│   │
│   └── [[...optional]]/        → Optional catch-all route
│       └── page.tsx            → "/blog" OR "/blog/*"
│
├── dashboard/
│   ├── layout.tsx              → Shared dashboard layout
│   ├── page.tsx                → "/dashboard"
│   │
│   ├── settings/
│   │   └── page.tsx            → "/dashboard/settings"
│   │
│   ├── analytics/
│   │   └── page.tsx            → "/dashboard/analytics"
│   │
│   └── @stats/                 → Parallel route slot
│       └── page.tsx            → Slot content
│
├── (auth)/                     → Route group (NO URL impact)
│   ├── login/
│   │   └── page.tsx            → "/login"
│   ├── register/
│   │   └── page.tsx            → "/register"
│   └── forgot-password/
│       └── page.tsx            → "/forgot-password"
│
├── (marketing)/                → Another route group
│   ├── features/page.tsx       → "/features"
│   └── pricing/page.tsx        → "/pricing"
│
├── _components/                → Private folder (not routable)
├── _utils/                     → Private folder (not routable)
│
├── api/
│   ├── users/
│   │   └── route.ts            → "/api/users"
│   │
│   ├── posts/
│   │   └── route.ts            → "/api/posts"
│   │
│   └── auth/
│       └── route.ts            → "/api/auth"
│
└── middleware.ts               → Middleware (auth, redirects, etc)

```

### URL Mapping

- `/` → `app/page.tsx`
- `/about` → `app/about/page.tsx`
- `/blog` → `app/blog/page.tsx`
- `/blog/[id]` → `app/blog/[id]/page.tsx` (Dynamic route)

### Key Concepts

**Layouts**

- `layout.tsx` provides shared UI structure for routes
- Layouts wrap child pages and persist across navigation

**Dynamic Routes**

- `[param]` creates dynamic segments (e.g., `/blog/[id]`)
- `[...slug]` catches multiple segments (catch-all routes)
- `[[...slug]]` optional catch-all routes

**Special Files**

- `page.tsx` - makes a segment publicly accessible
- `layout.tsx` - shared UI for a segment and children
- `loading.tsx` - loading UI (React Suspense)
- `error.tsx` - error handling boundaries
- `not-found.tsx` - 404 custom page
- `route.ts` - API endpoints

**Route Groups**

- `(group-name)/` - organize routes without affecting URL structure

**Parallel Routes**

- `@folder` syntax for simultaneous rendering of multiple pages

**Private Folders**

- `_folder` prefix keeps folders private from routing
- if you want use `_` in your route then you can use `%5F` instead.

## Metadata

We can only use one of them static/dynamic metadata inside an page and component mast to be SSR

```javascript
// staticly set metadata for this page
export const metadata = {
  title: "About page",
  description: "Read about us how are we worked here..."
}

export default function AboutPage() {
  return <section>Wellcome to the about page</section>;
}

// dynamicly set metadata for this page
import { Metadata } from "next";

interface Props {
  params: Promise<{ productId: string }>;
}

// dynamicly set metadata for this page
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: `Product details of ${productId}`,
  };
};

export default async function ProductDetailsPage({ params }: Props) {
  const { productId } = await params;

  return (
    <section>
      Wellcome to the products details page for product: {productId}
    </section>
  );
}
```

