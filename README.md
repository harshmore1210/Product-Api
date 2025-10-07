Product API (Node.js + Express + MongoDB)

📖 Description

This is a simple backend CRUD API built using Node.js, Express, and MongoDB (Mongoose).
It allows you to create, read, update, and delete (CRUD) product data through RESTful API endpoints.
The project demonstrates how to connect Express with MongoDB, handle JSON requests, and perform database operations using Mongoose models.

🚀 Features

Create a new product (POST /products)

Retrieve all products (GET /products)

Retrieve a single product by ID (GET /products/:id)

Update a product by ID (PUT /products/:id)

Delete a product by ID (DELETE /products/:id)

Uses dotenv for environment configuration

Uses CORS for cross-origin API requests

Structured with Mongoose models and Express routes

🧰 Technologies Used:

Node.js

Express.js

MongoDB + Mongoose

dotenv

CORS

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/yourusername/product-api.git
cd product-api

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file in the root folder and add:

MONGO_URI=your_mongodb_connection_string
PORT=5000

4️⃣ Start the Server

For production:

npm start


For development (with Nodemon):

npm run dev

📡 API Endpoints

POST	/products	Create a new product
GET	/products	Get all products
GET	/products/:id	Get product by ID
PUT	/products/:id	Update product by ID
DELETE	/products/:id	Delete product by ID

🧪 Example Request (POST /products)

{
  "name": "iPhone 15",
  "price": 79999,
  "description": "Latest Apple smartphone"
}

📦 Folder Structure
product-api/
├── models/
│   └── Product.js
├── server.js
├── .env
├── package.json
└── README.md

🧑‍💻 Author

Harsh More

