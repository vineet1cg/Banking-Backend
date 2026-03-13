# 🏦 NeoBank - Digital Banking Platform

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-9.x-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind" />
</p>

> A next-generation digital banking platform built to revolutionize how individuals manage their finances.

---

## ✨ Our Vision

Traditional banking often falls short in delivering seamless, user-centric experiences. We are building **NeoBank** to change that.

### 🔴 The Problem We're Solving

| Issue | Description |
|-------|-------------|
| 🖥️ **Complex UI** | Legacy apps are cluttered and unintuitive |
| ⏰ **Limited Access** | Restricted hours leave customers without support |
| 🐢 **Slow Transactions** | Fund transfers often take days to complete |
| 📉 **Poor Visibility** | Difficulty seeing complete financial health |
| 🔓 **Security Risks** | Increasing cyber threats demand better protection |
| 💸 **Hidden Fees** | Complicated fee structures confuse customers |

### 🟢 Our Solution

NeoBank addresses these challenges with:

- ✨ Modern, intuitive interface built with **React & Tailwind CSS**
- ⚡ 24/7 cloud-native accessibility
- 🚀 Real-time transactions with instant balance updates
- 📊 Unified financial dashboard
- 🔒 Bank-grade security with JWT & bcrypt
- 💰 Transparent fee structure
- 🤖 AI-powered personalization

---

## 🚀 Features

### 🔐 Authentication & Security

| Feature | Description |
|---------|-------------|
| **Secure Registration** | Email validation with password strength enforcement |
| **JWT Authentication** | Stateless token-based authentication |
| **Password Security** | bcrypt hashing with salt rounds |
| **Cookie Sessions** | Secure HTTP-only cookies |
| **Rate Limiting** | Protection against brute-force attacks |
| **CORS Enabled** | Cross-origin resource sharing support |

### 💳 Core Banking

- 📱 Account Dashboard with real-time balance
- 💸 Internal & external fund transfers
- 📜 Transaction history with search & filters
- 🧾 Bill payment system
- 📄 Account statements

### 📊 Financial Intelligence

- 📈 Spending analytics with visual charts
- 🏷️ Category-based expense tracking
- 🎯 Budget creation & monitoring
- 🎁 Savings goals with progress tracking
- 📑 Financial reports

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| ⚛️ React | UI Framework |
| 🎨 Tailwind CSS | Styling |
| 🔄 React Router | Navigation |
| 📡 Axios | HTTP Client |
| 🌙 Dark Mode | Theme Support |

### Backend
| Technology | Purpose |
|------------|---------|
| 🟢 Node.js | Runtime |
| 🚀 Express.js | Framework |
| 🍃 MongoDB | Database |
| 🔑 JWT | Authentication |
| 🔐 bcrypt | Password Hashing |

---

## 📁 Project Structure

```
🏦 BANKINGSYSTEM/
├── 📂 src/
│   ├── 🧠 controllers/      # Request handlers
│   ├── 🗄️  db/              # Database connection
│   ├── 🔒 middleware/       # Auth middleware
│   ├── 📊 models/           # Mongoose schemas
│   ├── 🛤️  routes/          # API routes
│   └── ⚙️  app.js          # Express app
├── 📄 server.js             # Entry point
├── 📦 package.json          # Dependencies
└── 🔐 .env                 # Environment variables
```

---

## ⚡ Getting Started

### Prerequisites

- 🟢 Node.js 18+
- 🍃 MongoDB (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/vineet1cg/Banking-Backend.git

# Navigate to project directory
cd BANKINGSYSTEM

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/bankingsystem
JWT_SECRET=your_super_secret_key
PORT=3000
```

### Running the Server

```bash
# Development mode
npm run dev

# Production
node server.js
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|:------:|----------|-------------|
| 📝 POST | `/api/auth/register` | Register a new user |
| 🔑 POST | `/api/auth/login` | User login |

### Register User

```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login User

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

---

## 🔐 Security Features

- 🔒 Password hashing with bcrypt (10 salt rounds)
- 🎫 JWT tokens for session management
- 🍪 HTTP-only cookies
- ✅ Input validation
- 🚦 Rate limiting on requests

---

## 📈 Hackathon Roadmap (3 Days)

| Phase | Timeline | Focus Area | Deliverables |
|:-----:|----------|------------|--------------|
| 1️⃣ | **Day 1** | Foundation - Auth, Setup, Routing | Req 1,2,3,4,11 |
| 2️⃣ | **Day 2** | Core Features - CRUD, Search, Pagination | Req 6,7,8,9,10,13 |
| 3️⃣ | **Day 3** | UI Polish - Theme, Responsive, Testing | Req 5,12 |

### ✅ All 13 Requirements Covered

| # | Requirement | Status |
|:-:|-------------|:------:|
| 1 | Routing & Navigation | ✅ |
| 2 | React Hooks | ✅ |
| 3 | State Management | ✅ |
| 4 | Authentication | ✅ |
| 5 | Theme Support | ✅ |
| 6 | Search, Filter, Sort | ✅ |
| 7 | Debouncing | ✅ |
| 8 | Pagination | ✅ |
| 9 | CRUD Operations | ✅ |
| 10 | API Integration | ✅ |
| 11 | Form Validation | ✅ |
| 12 | Responsive UI | ✅ |
| 13 | Error Handling | ✅ |

---

## 📝 License

ISC License - feel free to use this project for learning or commercial purposes.

---

<p align="center">

Built with ❤️ by [Vineet](https://github.com/vineet1cg)

</p>
