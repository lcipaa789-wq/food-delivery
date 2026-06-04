# Food Delivery App

A full-stack food delivery web application built with React, Node.js, Express, and MongoDB.

The application allows users to browse food items, add products to their cart, place orders, and complete payments through Stripe. It includes authentication, an admin dashboard for managing products and orders, Cloudinary image storage, and an AI-powered food assistant for food recommendations.

## Features

### User Features

- User registration and login
- Browse food items by category
- Add and remove items from cart
- Place orders
- Stripe payment integration
- View order history
- Responsive design

### Admin Features

- Add new food items
- Upload food images through Cloudinary
- View all orders
- Manage product catalog

### AI Features

- AI food assistant powered by Anthropic Claude
- Food recommendations based on user prompts
- Backend integration with AI API

## Tech Stack

### Frontend

- React
- React Router
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express.js
- JWT Authentication
- Multer
- Cloudinary

### Database

- MongoDB Atlas
- Mongoose

### Third-Party Services

- Stripe
- Cloudinary
- Anthropic API

## Project Structure

```text
food-delivery/
│
├── frontend/
│   ├── src/
│   └── public/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── config/
│
└── admin/
```

## Environment Variables

### Backend

Create a `.env` file inside the backend directory:

```env
PORT=4000

MONGODB_URL=

JWT_SECRET=

STRIPE_SECRET_KEY=

CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET_KEY=

ANTHROPIC_API_KEY=
```

### Frontend

```env
VITE_API_URL=
```

## Installation

Clone the repository:

```bash
git clone https://github.com/lcipaa789-wq/food-delivery.git
```

Install dependencies:

```bash
cd frontend
npm install

cd ../backend
npm install

cd ../admin
npm install
```

Run the application:

Backend:

```bash
npm run server
```

Frontend:

```bash
npm run dev
```

Admin Panel:

```bash
npm run dev
```
