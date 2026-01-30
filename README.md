# JWT Authentication Learning Project

This is a simple Node.js project created to learn and demonstrate JWT (JSON Web Token) authentication. It uses Express, MongoDB (Mongoose), and bcryptjs.

## Features

- User Registration
- User Login
- Protected Routes using JWT Middleware

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT)
- bcryptjs (Password Hashing)
- dotenv (Environment Variables)

```sh
npm install
```

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd jwt-auth
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

## Usage

Start the server:
```sh
npm run dev
```

The server will run on `http://localhost:5000` (or your defined PORT).

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive a JWT |
| POST | `/api/auth/profile` | Access protected user profile |

## API Usage Examples

### 1. Register a User
**Endpoint:** `POST /api/auth/register`

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "message": "Registration succesful!"
}
```

### 2. Login
**Endpoint:** `POST /api/auth/login`

**Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "message": "Login Succesful",
  "Token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

### 3. Get Profile (Protected)
**Endpoint:** `POST /api/auth/profile`

**Headers:**
```
Authorization: Bearer <your_token_here>
```

**Response:**
```json
{
  "message": "Welcome",
  "user": {
    "id": "64f8a...",
    "email": "john@example.com"
  }
}
```

## Project Structure

- `server.js`: Entry point of the application.
- `config/`: Database configuration.
- `controllers/`: Handles the logic for routes.
- `middlewares/`: Middleware functions (e.g., auth check).
- `models/`: Mongoose schemas.
- `routes/`: API route definitions.
- `services/`: Business logic services.
