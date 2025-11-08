---
title: "Getting Started with Next.js and TypeScript"
date: "2025-01-15"
excerpt: "Learn how to set up a modern web application using Next.js 15 and TypeScript with best practices and optimization tips."
thumbnail: "https://miro.medium.com/0*tnuNbnRERWq6OcQv.jpg"
tags: ["Next.js", "TypeScript", "React"]
author: "Ahmad Rafi'i"
---

# Getting Started with Next.js and TypeScript

Next.js has become one of the most popular frameworks for building modern web applications. Combined with TypeScript, it provides a powerful development experience with type safety and excellent developer tooling.

## Why Next.js and TypeScript?

Next.js offers several key features that make it stand out:

- **Server-Side Rendering (SSR)**: Improved SEO and initial page load performance
- **Static Site Generation (SSG)**: Pre-render pages at build time
- **API Routes**: Build your backend API alongside your frontend
- **File-based Routing**: Intuitive routing based on file structure
- **Image Optimization**: Automatic image optimization with next/image

TypeScript adds type safety to your JavaScript code, catching errors early in development and providing better IDE support.

## Setting Up Your Project

Let's start by creating a new Next.js project with TypeScript:

```bash
npx create-next-app@latest my-app --typescript
cd my-app
npm run dev
```

This will create a new Next.js project with TypeScript already configured.

## Project Structure

A typical Next.js project structure looks like this:

```
my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── Button.tsx
├── public/
│   └── images/
├── package.json
└── tsconfig.json
```

### Key Directories

- **app/**: Contains your application pages and layouts (App Router)
- **components/**: Reusable React components
- **public/**: Static assets like images and fonts

## Creating Your First Component

Here's an example of a type-safe Button component:

```typescript
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function Button({ 
  variant = "primary", 
  size = "md",
  children,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

## Best Practices

### 1. Use TypeScript Strictly

Enable strict mode in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

### 2. Leverage Server Components

Next.js 13+ introduced Server Components by default. Use them for better performance:

```typescript
// This is a Server Component by default
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}
```

### 3. Optimize Images

Always use the Next.js Image component:

```typescript
import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
/>
```

### 4. Type Your API Routes

```typescript
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = { message: "Hello World" };
  return NextResponse.json(data);
}
```

## Performance Optimization

### Code Splitting

Next.js automatically code-splits your application. You can also use dynamic imports:

```typescript
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Loading...</p>,
});
```

### Caching

Use Next.js caching strategies:

```typescript
export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  // Generate static pages at build time
  return [{ slug: "post-1" }, { slug: "post-2" }];
}
```

## Conclusion

Next.js and TypeScript together provide a robust foundation for building modern web applications. The combination offers:

- Type safety and better developer experience
- Excellent performance out of the box
- SEO-friendly rendering options
- Easy deployment and scaling

Start building your next project with this powerful stack and experience the benefits of type-safe, performant web development.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)

Happy coding! 🚀
