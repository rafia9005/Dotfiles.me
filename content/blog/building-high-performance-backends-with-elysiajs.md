---
title: "Building High-Performance Backends with ElysiaJS"
date: "2026-03-07"
excerpt: "Discover ElysiaJS, the Bun-native framework designed for speed, type safety, and an exceptional developer experience."
thumbnail: "https://bwaplatformbucket.sgp1.cdn.digitaloceanspaces.com/assets/thumbnail_tips/buildwithangga-thumbnail-tips-miblw-elysiajs-tutorial-mengapa-framework-ini-21x-lebih-cepat-dari-express-thumbnnail-IpfEim.png"
tags: ["ElysiaJS", "Bun", "TypeScript", "Backend"]
author: "Ahmad Rafi'i"
---

# Building High-Performance Backends with ElysiaJS

If you are looking for the fastest way to build a TypeScript backend, **ElysiaJS** is currently leading the charge. Designed specifically for the **Bun** runtime, it leverages modern features to provide a developer experience that is both incredibly fast and strictly type-safe.

## Why ElysiaJS?

Elysia stands out in the crowded backend framework landscape for several reasons:

* **Blazing Performance**: Built on Bun, it often outperforms Express and Fastify in benchmarks.
* **End-to-End Type Safety**: With **Eden**, your frontend can "inherit" the types from your backend without manual synchronization.
* **Validation out of the box**: Uses **TypeBox** or **Zod** for schema validation that feels natural.
* **Developer Experience**: It features a functional, chainable API that makes code readable and concise.
* **Swagger Integration**: Generate documentation automatically with a single line of code.

## Setting Up Your Project

Since Elysia is optimized for Bun, ensure you have Bun installed first. Then, run the following commands:

```bash
bun create elysia my-api
cd my-api
bun dev

```

This scaffold sets up a ready-to-use environment with TypeScript configured.

## Creating Your First API

Elysia uses a beautiful, chainable syntax. Here is how you create a simple server with validation:

```typescript
import { Elysia, t } from 'elysia'

const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .post('/user', ({ body }) => body, {
    body: t.Object({
      id: t.Numeric(),
      username: t.String(),
      email: t.String({ format: 'email' })
    })
  })
  .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)

```

### Key Features Explained

* **t.Object**: Part of Elysia's schema builder. It validates incoming data and provides full IntelliSense for the `body` variable.
* **Chainability**: Notice how we keep adding routes by calling `.get()` or `.post()` on the same instance.

## Best Practices

### 1. Modularize with Plugins

Don't put everything in one file. Use Elysia’s plugin system to group logic:

```typescript
// src/routes/posts.ts
import { Elysia } from 'elysia'

export const posts = new Elysia({ prefix: '/posts' })
  .get('/', () => 'All posts')
  .get('/:id', ({ params: { id } }) => `Post ${id}`)

// src/index.ts
import { Elysia } from 'elysia'
import { posts } from './routes/posts'

new Elysia()
  .use(posts)
  .listen(3000)

```

### 2. Automatic Documentation

Add Swagger UI to your project instantly to test your endpoints:

```typescript
import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

new Elysia()
  .use(swagger()) // Access at /swagger
  .get('/', () => 'Hi')
  .listen(3000)

```

### 3. State and Decorators

Handle global state or shared logic (like database connections) using `.state()` or `.decorate()`:

```typescript
const app = new Elysia()
  .decorate('db', new Database())
  .get('/data', ({ db }) => db.findAll())

```

## Performance Comparison

Elysia isn't just about syntax; it's about raw speed. In many "Hello World" benchmarks:

* **Elysia (Bun)**: ~250,000 requests per second.
* **Fastify (Node)**: ~70,000 requests per second.
* **Express (Node)**: ~15,000 requests per second.

## Conclusion

ElysiaJS represents a shift toward "type-first" development. By combining the speed of Bun with the safety of TypeScript, it allows you to build scalable APIs without the traditional overhead of manual type definitions and validation logic.

Whether you're building a simple microservice or a complex web app, Elysia provides the tools to move fast without breaking things.

## Resources

* [ElysiaJS Official Documentation](https://elysiajs.com)
* [Bun Runtime](https://bun.sh)
* [Eden - End-to-end Type Safety](https://elysiajs.com/eden/overview.html)

Happy coding! 🦊🚀