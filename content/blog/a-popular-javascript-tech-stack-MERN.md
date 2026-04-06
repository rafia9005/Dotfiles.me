---
title: "a popular, open-source JavaScript framework used to build full-stack web applications"
date: "2026-03-09"
excerpt: "Master the MERN stack—the most popular open-source JavaScript ecosystem for building scalable, production-ready web applications."
thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjUqDob5lqGBj6b0tCxntv6zmZp67aUn6Nw&s"
tags: ["MongoDB", "ExpressJS", "NodeJS", "React.JS"]
author: "Ahmad Rafi'i"
---

## Prerequisites & Requirements


Before diving into the code, ensure your local environment meets these requirements:



* **Node.js**: Version 18.x or higher (LTS recommended).

* **npm or yarn**: Typically comes bundled with Node.js.

* **MongoDB**:

* **Local**: MongoDB Community Server installed on your machine.

* **Cloud**: A free **MongoDB Atlas** account (recommended for beginners).





* **Code Editor**: Visual Studio Code (VS Code) is the industry standard.

* **Basic Knowledge**: Familiarity with JavaScript ES6+ (Arrow functions, Destructuring, and Async/Await).



---



## Step-by-Step Installation



The MERN stack consists of two separate folders: one for the backend (Node/Express) and one for the frontend (React).



### 1. Initialize the Backend



Open your terminal and create your project directory:



```bash
mkdir mern-app && cd mern-app
mkdir server && cd server
npm init -y
```



Install the essential backend dependencies:



```bash
npm install express mongoose dotenv cors
npm install --save-dev nodemon
```



* **mongoose**: The ODM (Object Data Modeling) library for MongoDB.

* **dotenv**: To manage environment variables (like your Database URI).

* **cors**: To allow your React frontend to communicate with your Express backend.



### 2. Initialize the Frontend



Go back to the root folder and use **Vite** to scaffold a modern React application:



```bash

cd ..
npm create vite@latest client -- --template react
cd client
npm install
```



Install the frontend routing and HTTP client:



```bash
npm install axios react-router-dom
```

## Connecting the Pieces



To get your stack talking, you need to set up your `.env` file in the **server** directory:



```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase
```



Then, initialize the connection in your `server/index.js`:



```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

```



---



## Running the Application



To make development easier, you can add a "dev" script to your backend `package.json`:

`"dev": "nodemon index.js"`



Now, you can run both sides:



1. **Backend**: `cd server && npm run dev`

2. **Frontend**: `cd client && npm run dev`

