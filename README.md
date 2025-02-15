# Order Management API

## Description

This project is a **REST API** for order management, built with **Node.js** and using **PostgreSQL** or **MongoDB** as the database. The API allows creating orders, verifying user balance, and updating product stock based on orders. Rate-limiting is implemented along with transaction support.

## Data Structure

### 1. Users
- **id** (UUID / ObjectId)
- **name** (string, required)
- **email** (string, unique, required)
- **balance** (decimal, default: 100)

### 2. Products
- **id** (UUID / ObjectId)
- **name** (string, required)
- **price** (decimal, required)
- **stock** (integer, required)

### 3. Orders
- **id** (UUID / ObjectId)
- **userId** (FK to users, required)
- **productId** (FK to products, required)
- **quantity** (integer, required)
- **totalPrice** (decimal, auto-calculated)
- **createdAt** (timestamp, default: now)

## API Endpoints

### `POST /orders`
Create an order:
- Verifies that the user has enough balance.
- Verifies that the product is available in stock.
- Executes a transaction: deducts balance from the user, decreases product stock, and creates the order.

### `GET /orders/:userId`
Retrieve all orders for a user.

### `GET /users`
Test GET request for fetching users (for frontend purposes).

### `GET /products`
Test GET request for fetching products (for frontend purposes).

> **Note**: These test GET requests are for testing the frontend and do not involve full authentication or authorization.

## Features

- **Transactions**: Order creation is executed within a transaction to ensure atomicity of all operations.
- **Rate-limiting**: API requests are limited to 10 per minute per user.
- **Error Handling**: API returns appropriate HTTP error codes (400, 403, 404, 429) with detailed error messages.

## Requirements

- **Node.js** v14 or higher
- **TypeScript**
- **PostgreSQL** or **MongoDB** (depending on your configuration)

## Setup and Running

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/order-management-api.git

2. Install dependencies:

    ```bash
   npm install
   
3. Configure the database connection in the .env file.

4. Run the server:

### For development:

    ```bash
    npm run dev  

This will start the server using nodemon with pino-pretty for beautiful logging.

### For production:
1. First, compile the TypeScript code:

    ```bash
    npm run dev

2. Then, start the server:

    ```bash
    npm start
The npm start command will run the server using the compiled code from the dist folder.

## Project Commands
- **npm run build**: Compile TypeScript code and generate documentation.
- **npm run start**: Start the project using compiled code.
- **npm run dev**: Start in development mode with automatic reloading using nodemon and pretty logging with pino-pretty.
- **npm run lint**: Run ESLint to check the code.
- **npm run lint:fix**: Automatically fix code issues using ESLint.

# Note
I planned to implement authentication with user access via token. However, the task requirements did not specify this, and the user schema was not designed to store authentication-related data (e.g., passwords). Therefore, the authentication functionality was excluded from the implementation.