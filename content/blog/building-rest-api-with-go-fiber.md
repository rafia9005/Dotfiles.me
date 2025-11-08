---
title: "Building REST API with Go and Fiber"
date: "2025-01-10"
excerpt: "A comprehensive guide to building high-performance REST APIs using Go and the Fiber web framework."
thumbnail: "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fe4y1ma4c0wsbwqs9kz6s.png"
tags: ["Go", "Fiber", "API"]
author: "Ahmad Rafi'i"
---

# Building REST API with Go Fiber

Go Fiber is a web framework built on top of Fasthttp, the fastest HTTP engine for Go. It's designed to ease things up for fast development with zero memory allocation and performance in mind.

## Why Go Fiber?

- **Express-like syntax**: Familiar API for developers coming from Node.js
- **Extremely fast**: Built on Fasthttp, one of the fastest HTTP engines
- **Low memory footprint**: Efficient memory usage
- **Middleware support**: Rich ecosystem of middleware
- **Easy routing**: Intuitive routing system

## Getting Started

Install Fiber:

```bash
go get -u github.com/gofiber/fiber/v2
```

## Basic Setup

Here's a simple Fiber application:

```go
package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
    app := fiber.New()

    // Middleware
    app.Use(logger.New())

    // Routes
    app.Get("/", func(c *fiber.Ctx) error {
        return c.JSON(fiber.Map{
            "message": "Hello, World!",
        })
    })

    app.Listen(":3000")
}
```

## Clean Architecture

Let's structure our API with clean architecture:

```
project/
├── cmd/
│   └── api/
│       └── main.go
├── internal/
│   ├── handler/
│   ├── service/
│   ├── repository/
│   └── model/
├── pkg/
│   └── database/
└── go.mod
```

## Example: User API

### Model

```go
package model

type User struct {
    ID        uint   `json:"id" gorm:"primaryKey"`
    Name      string `json:"name" validate:"required"`
    Email     string `json:"email" validate:"required,email"`
    CreatedAt time.Time `json:"created_at"`
}
```

### Repository

```go
package repository

type UserRepository interface {
    Create(user *model.User) error
    GetByID(id uint) (*model.User, error)
    GetAll() ([]model.User, error)
    Update(user *model.User) error
    Delete(id uint) error
}
```

### Handler

```go
package handler

type UserHandler struct {
    service service.UserService
}

func (h *UserHandler) CreateUser(c *fiber.Ctx) error {
    var user model.User
    if err := c.BodyParser(&user); err != nil {
        return c.Status(400).JSON(fiber.Map{
            "error": "Invalid request body",
        })
    }

    if err := h.service.CreateUser(&user); err != nil {
        return c.Status(500).JSON(fiber.Map{
            "error": err.Error(),
        })
    }

    return c.Status(201).JSON(user)
}
```

## Middleware

Add custom middleware:

```go
func AuthMiddleware() fiber.Handler {
    return func(c *fiber.Ctx) error {
        token := c.Get("Authorization")
        if token == "" {
            return c.Status(401).JSON(fiber.Map{
                "error": "Unauthorized",
            })
        }
        // Verify token
        return c.Next()
    }
}
```

## Best Practices

1. **Use proper error handling**
2. **Validate input data**
3. **Implement middleware for common tasks**
4. **Use environment variables for configuration**
5. **Add proper logging**
6. **Write tests**

## Conclusion

Go Fiber is an excellent choice for building fast and scalable REST APIs. Combined with clean architecture, you can create maintainable and testable applications.

Happy coding! 🚀
