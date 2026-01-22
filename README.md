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



