# 🏦 Banking System Backend

A robust and secure REST API for a banking system built with Node.js, Express, and MongoDB.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js)
![Express](https://img.shields.io/badge/Express-5.x-000000?style=flat&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-9.x-47A248?style=flat&logo=mongodb)
![License](https://img.shields.io/badge/License-ISC-green)

## 🚀 Features

- **User Registration** - Secure account creation with email validation
- **JWT Authentication** - Stateless token-based authentication
- **Password Security** - bcryptjs hashing with salt rounds
- **Cookie-based Sessions** - Secure HTTP-only cookies for token storage
- **Rate Limiting** - Protection against brute-force attacks
- **CORS Enabled** - Cross-origin resource sharing support

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM library |
| JWT | Authentication |
| bcryptjs | Password hashing |

## 📁 Project Structure

```
BANKINGSYSTEM/
├── src/
│   ├── controllers/     # Request handlers
│   ├── db/             # Database connection
│   ├── middleware/     # Custom middleware
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   └── app.js         # Express app setup
├── server.js          # Entry point
├── package.json       # Dependencies
└── .env              # Environment variables
```

## ⚡ Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)

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

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb://localhost:27017/bankingsystem
JWT_SECRET=your_super_secret_key
PORT=3000
```

### Running the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production
node server.js
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |

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

**Response:**
```json
{
  "message": "User Created Successfully",
  "user": {
    "_id": "...",
    "email": "john@example.com",
    "name": "John Doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

## 🔐 Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT tokens for session management
- HTTP-only cookies
- Input validation
- Rate limiting on requests

## 📝 License

ISC License - feel free to use this project for learning or commercial purposes.

---

<div align="center">

Built with ❤️ by [Vineet](https://github.com/vineet1cg)

</div>
