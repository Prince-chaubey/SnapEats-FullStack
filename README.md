SnapEats MERN Delivery App

## About

SnapEats is a modern and responsive food delivery application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse nearby restaurants, explore menus, add items to the cart, place orders, and track delivery status in real time.

## Features

### User/Customer Features:
* **User Authentication:** Secure registration, login, and profile management (JWT-based).
* **Menu Browse:** View detailed menus for each restaurant, including dishes, descriptions, and prices.
* **Shopping Cart:** Add/remove items to a dynamic shopping cart.
* **Order Placement:** Place orders with chosen items, quantities, and delivery address.
* **Order History:** View past orders with status updates.
* **Payment Integration (Mock/Real):** (e.g., Stripe - A demo Payment setup).
* **User Profile:** Update personal information and delivery addresses.

## Technologies Used

* **Frontend:**
    * [React.js](https://react.dev/) - A JavaScript library for building user interfaces.
    * [React Router DOM](https://reactrouter.com/en/main) - For client-side routing.
    * [React Context API](https://react.dev/learn/passing-props-with-context) - For state management.
    * [Axios](https://axios-http.com/) - For making HTTP requests to the backend.
    * [Tailwind CSS](https://tailwindcss.com/)
    * [React Icons](https://react-icons.github.io/react-icons/) - For popular icon packs.
* **Backend:**
    * [Node.js](https://nodejs.org/en) - JavaScript runtime environment.
    * [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework.
    * [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js.
    * [bcryptjs](https://www.npmjs.com/package/bcryptjs) - For hashing passwords.
    * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For generating and verifying access tokens.
    * [dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a `.env` file.
    * [CORS](https://www.npmjs.com/package/cors) - Node.js CORS middleware.
    * [express-validator](https://express-validator.github.io/docs/) - For request data validation.
    * [Multer](https://www.npmjs.com/package/multer) - For handling `multipart/form-data` (e.g., for image uploads).
* **Database:**
    * [MongoDB](https://www.mongodb.com/) - A NoSQL database.
    * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud-hosted MongoDB service (recommended for production).

## Prerequisites

Before running this project, ensure you have the following installed:

* **Node.js:** [Download and install Node.js (LTS version recommended)](https://nodejs.org/en/download/)
* **npm** or **yarn:** (Comes with Node.js, or install yarn: `npm install -g yarn`)
* **MongoDB:**
    * **Local Installation:** [Install MongoDB Community Server](https://docs.mongodb.com/manual/installation/)
    * **Cloud (MongoDB Atlas):** Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and get your connection URI.

## Getting Started

Follow these steps to get your development environment up and running.

### Backend Setup

1.  **Clone the repository:**
    
2.  **Install backend dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Create a `.env` file:**
    In the `backend` directory, create a file named `.env` and add the following environment variables. Replace the placeholder values with your actual configurations.

    ```dotenv
  
    PORT=8080
    DB_URL=mongodb+srv://kumarashish180906:Ashish311806@cluster0.8m0z1cc.mongodb.net/?
    STRIPE_SECRET=sk_test_51RiKItHknsYdaZHriursiPrJB2bxCm1byd4e9P9lnAysQwyfDsS9fLviXym5gEy7GQQXET23BbC7PNZvicGkyl9s00RAet4fdp
    FRONTEND_URL=http://localhost:5173
    JWT_SECRET=SnapEatsSecretKey123
    ```
    * **MongoDB Connection String:** For local, it might be `mongodb://localhost:8080/foodiez_db`. For Atlas, copy it directly from your cluster's "Connect" section.
    * **JWT_SECRET:** Use a long, random string. You can generate one online or use a tool.

4.  **Run the backend server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The backend server will typically run on `http://localhost:5000` (or the `PORT` you specified).

### Frontend Setup

1.  **Navigate to the frontend directory:**
     ```
     cd Frontend
     ```
2.  **Install frontend dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
    
3.  **Run the frontend development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The frontend application will typically open in your browser at `http://localhost:3000` (or another available port).

## Project Structure

   Okay, here's a comprehensive README template specifically tailored for an Online Food Delivery MERN Stack Application.

Markdown

# Foodiez - Online Food Delivery App

## Table of Contents

* [About](#about)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)
    * [Backend Setup](#backend-setup)
    * [Frontend Setup](#frontend-setup)
* [Project Structure](#project-structure)
* [API Endpoints](#api-endpoints)
* [Environment Variables](#environment-variables)
* [Running the App](#running-the-app)
* [Testing](#testing) * [Deployment](#deployment)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

## About

**Foodiez** is a full-stack online food delivery application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a seamless experience for users to browse various restaurants, explore their menus, place orders, and track their delivery. On the other hand, it offers an intuitive platform for restaurant owners to manage their listings, menus, and incoming orders.

This application aims to provide a robust and scalable solution for connecting food lovers with their favorite local eateries, bringing convenience right to their doorstep.

## Features

### User/Customer Features:
* **User Authentication:** Secure registration, login, and profile management (JWT-based).
* **Restaurant Listing:** Browse a list of available restaurants with search and filter options.
* **Menu Browse:** View detailed menus for each restaurant, including dishes, descriptions, and prices.
* **Shopping Cart:** Add/remove items to a dynamic shopping cart.
* **Order Placement:** Place orders with chosen items, quantities, and delivery address.
* **Order History:** View past orders with status updates.
* **Payment Integration (Mock/Real):** (e.g., Stripe, PayPal - mention if it's a mock integration for now).
* **User Profile:** Update personal information and delivery addresses.

### Restaurant/Admin Features:
* **Restaurant Management:** Add, update, and delete restaurant details (name, address, logo, etc.).
* **Menu Management:** Create, update, and delete menu categories and individual food items.
* **Order Management:** View incoming orders, update order status (e.g., pending, preparing, out for delivery, delivered).
* **Dashboard:** Overview of sales and order statistics (if implemented).

## Technologies Used

* **Frontend:**
    * [React.js](https://react.dev/) - A JavaScript library for building user interfaces.
    * [React Router DOM](https://reactrouter.com/en/main) - For client-side routing.
    * [Redux Toolkit](https://redux-toolkit.js.org/) / [React Context API](https://react.dev/learn/passing-props-with-context) - For state management.
    * [Axios](https://axios-http.com/) - For making HTTP requests to the backend.
    * [Material-UI](https://mui.com/) / [Chakra UI](https://chakra-ui.com/) / [Tailwind CSS](https://tailwindcss.com/) / [Bootstrap](https://getbootstrap.com/) - For UI component library/styling (specify which one you used).
    * [React Icons](https://react-icons.github.io/react-icons/) - For popular icon packs.
* **Backend:**
    * [Node.js](https://nodejs.org/en) - JavaScript runtime environment.
    * [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework.
    * [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js.
    * [bcryptjs](https://www.npmjs.com/package/bcryptjs) - For hashing passwords.
    * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For generating and verifying access tokens.
    * [dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a `.env` file.
    * [CORS](https://www.npmjs.com/package/cors) - Node.js CORS middleware.
    * [express-validator](https://express-validator.github.io/docs/) - For request data validation.
    * [Multer](https://www.npmjs.com/package/multer) - For handling `multipart/form-data` (e.g., for image uploads).
* **Database:**
    * [MongoDB](https://www.mongodb.com/) - A NoSQL database.
    * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud-hosted MongoDB service (recommended for production).

## Prerequisites

Before running this project, ensure you have the following installed:

* **Node.js:** [Download and install Node.js (LTS version recommended)](https://nodejs.org/en/download/)
* **npm** or **yarn:** (Comes with Node.js, or install yarn: `npm install -g yarn`)
* **MongoDB:**
    * **Local Installation:** [Install MongoDB Community Server](https://docs.mongodb.com/manual/installation/)
    * **Cloud (MongoDB Atlas):** Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and get your connection URI.

## Getting Started

Follow these steps to get your development environment up and running.

### Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/foodiez-mern-app.git](https://github.com/your-username/foodiez-mern-app.git)
    cd foodiez-mern-app/backend # Navigate into your backend directory
    ```

2.  **Install backend dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Create a `.env` file:**
    In the `backend` directory, create a file named `.env` and add the following environment variables. Replace the placeholder values with your actual configurations.

    ```dotenv
    PORT=5000
    MONGO_URI=your_mongodb_connection_string # e.g., mongodb://localhost:27017/foodiez_db or your Atlas URI
    JWT_SECRET=supersecretjwtkey # Generate a strong, random key for JWT
    # CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name # If using Cloudinary for image uploads
    # CLOUDINARY_API_KEY=your_cloudinary_api_key
    # CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    # STRIPE_SECRET_KEY=sk_test_******************** # If using Stripe for payments
    ```
    * **MongoDB Connection String:** For local, it might be `mongodb://localhost:27017/foodiez_db`. For Atlas, copy it directly from your cluster's "Connect" section.
    * **JWT_SECRET:** Use a long, random string. You can generate one online or use a tool.

4.  **Run the backend server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The backend server will typically run on `http://localhost:5000` (or the `PORT` you specified).

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend # Assuming you are currently in the backend folder
    # or if starting fresh: cd foodiez-mern-app/frontend
    ```

2.  **Install frontend dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Create a `.env` file (if needed):**
    In the `frontend` directory, create a file named `.env` and add any necessary frontend environment variables.

    ```dotenv
    REACT_APP_API_URL=http://localhost:5000/api # Points to your backend API
    # REACT_APP_STRIPE_PUBLIC_KEY=pk_test_******************** # If using Stripe for payments
    ```
    * **Important:** React apps usually require environment variables to be prefixed with `REACT_APP_` to be accessible in the browser.

4.  **Run the frontend development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The frontend application will typically open in your browser at `http://localhost:3000` (or another available port).

## Project Structure

A typical MERN stack project for a food delivery app might look like this:

.
├── backend/
│   ├── config/
│   │   ├── db.js               # MongoDB connection setup
│   ├── controllers/            # Business logic for handling requests (e.g., authController.js, restaurantController.js)
│   ├── middleware/             # Middleware functions (e.g., authMiddleware.js for JWT verification)
│   ├── models/                 # Mongoose schemas (e.g., User.js, Restaurant.js, MenuItem.js, Order.js)
│   ├── routes/                 # API routes (e.g., authRoutes.js, restaurantRoutes.js, orderRoutes.js)
│   ├── app.js               # Main backend entry point (Express app setup)
│   └── package.json
├── frontend/
│   ├── public/                 # Public assets like index.html, favicons
│   ├── src/
│   │   ├── assets/             # Images, icons, local fonts
│   │   ├── components/         # Reusable UI components (e.g., Navbar, RestaurantCard, DishCard, CartItem)
│   │   ├── contexts/           # React Context API providers 
│   │   ├── hooks/              # Custom React hooks (e.g., useAuth, useCart)
│   │   ├── pages/              # Top-level page components (e.g., HomePage, RestaurantPage, CartPage, OrderHistoryPage, LoginPage, RegisterPage, AdminDashboard)
│   │   ├── App.js              # Main React application component (defines routes)
│   │   ├── index.js            # React entry point (renders App component)
│   │   └── index.css           # Global CSS styles
│   └── package.json
├── .gitignore                  # Specifies intentionally untracked files to ignore
├── README.md                   # This README file
└── package.json (root)         # Optional: for concurrent running with concurrently


## API Endpoints

Here are some key API endpoints available in the application:

| Method | Endpoint                      | Description                                        | Authentication Required | Request Body Example                   | Response Body Example           |
| :----- | :---------------------------- | :------------------------------------------------- | :---------------------- | :------------------------------------- | :------------------------------ |
| `POST` | `/api/user/register`          | Register a new user                                | No                      | `{ "name", "email", "password" }`      | `{ "token", "user" }`           |
| `POST` | `/api/user/login`             | Log in a user and get JWT token                    | No                      | `{ "email", "password" }`              | `{ "token", "user" }`           |
| `POST` | `/api/orders/placeOrder`      | Place a new order                                  | Yes (User)              | `{ "restaurantId", "items", "total" }` | `{ "order" }`                   |
| `post`  | `/api/orders/userOrders`       | Get current user's order history                 | Yes (User)              | -                                      | `[ { "order" } ]`               |


# SnapEats-FullStack
# SnapEats-FullStack
# SnapEats-FullStack
