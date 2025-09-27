# SecureAuth: Node.js Authentication & Authorization System

A learning project built to master secure user authentication and authorization using a full MERN-style stack.  
Focus areas include **Bcrypt** for hashing and **JSON Web Tokens (JWT)** for stateless session management.

---

## 🌸 Core Learning Outcomes

This project demonstrates practical skills in:

- **Authentication (AuthN):** Secure registration and login flow.
- **Authorization (AuthZ):** Protecting resources via access control.
- **Security:** Correct use of Bcrypt for password hashing.
- **Session Management:** Implementing JWT for stateless sessions.
- **Middleware:** Creating reusable Express middleware for token verification.

---

## 🔑 Key API Endpoints

| Endpoint             | Method | Description                                                |
|----------------------|--------|------------------------------------------------------------|
| `/api/auth/register` | POST   | Creates a new user with a bcrypt-hashed password.           |
| `/api/auth/login`    | POST   | Validates credentials and issues a JWT.                    |
| `/api/data`          | GET    | Protected route requiring a valid JWT for access.          |

---

## 🛠️ Tech Stack

### Server (Backend - `server/` directory)

| Technology          | Purpose        |
|--------------------|----------------|
| **Node.js, Express** | API foundation |
| **MongoDB / Mongoose** | Database and ODM |

### Security Libraries

| Library                | Purpose                |
|------------------------|------------------------|
| **Bcrypt**             | Password security.     |
| **jsonwebtoken (JWT)** | Token-based security.  |

### Client (Frontend - `client/` directory)

| Technology          | Purpose                       |
|--------------------|-------------------------------|
| **React (via Vite)** | User Interface                |
| **Axios / Fetch**    | API communication.            |
| **Storage**          | JWT handling on the client side. |

---

## 🚀 Getting Started

### 1. Installation

Clone the repo and install dependencies in both the server and client folders:

```bash
git clone <YOUR_REPO_URL>
cd <YOUR_REPO_NAME>

# Server setup
cd server
npm install

# Client setup
cd client
npm install
```

### 2. Configuration (/server/.env)

Create a .env file in the /server directory:

```bash
PORT=5000
MONGODB_URI=<Your connection string>
JWT_SECRET=<a long, random, and secure string>
```

### 3. Running the App

Start the server:

```bash
cd server
npm run start
```

Start the client (in a new terminal):

```bash
cd client
npm run dev
```