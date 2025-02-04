# Ecommerce Follow-Along Project 🚀

## Milestone 3: Backend Setup & Database Connection

### Overview

In Milestone 3, we focused on setting up the **backend**, connecting to **MongoDB**, and implementing basic **error handling** to support the growing application.

### Key Accomplishments

#### 📁 Backend Folder Structure

Organized backend files into **routes**, **controllers**, **models**, and **middleware**.
Ensured a **scalable and maintainable** backend architecture.

#### 🌐 Server Setup

Initialized and configured a **Node.js + Express** server.
Set up **CORS & environment variables** for better security and flexibility.

#### 🗄 Database Connection

Integrated **MongoDB** using **Mongoose** for efficient data storage.
Implemented a **successful database connection check**.

#### ⚠ Error Handling

Created **middleware** to handle errors gracefully.
Provided **clear error messages** for debugging and user feedback.

#### 🎯 Learning Outcomes

By completing this milestone, we learned:

How to **structure a backend** properly.
Connecting a **MongoDB database** to a Node.js server.
Implementing **error handling** in an Express app.
✅ Submission Details
Code is pushed to the **Milestone-3 branch** in the GitHub repository.
The repository includes:
✅ Proper **backend folder structure**.
✅ **Connected MongoDB database**.
✅ **Error handling middleware**.
✅ **Updated README** with Milestone 3 details.

🚀 **Onward to Milestone 4**!

## Milestone 2: Project Structure & Login Page

### Overview

In Milestone 2, we focused on structuring the project, setting up both the **frontend/** and **backend/**, and developing the **Login Page** for the e-commerce application.

### Key Accomplishments

#### 📁 Project Structure

Organized the project with separate frontend/ and backend/ directories.

#### 🌐 Frontend Setup

Initialized a **React app** for building the user interface.
Configured **Tailwind CSS** for utility-based styling.
Implemented a fully functional and styled **Login Page**.

#### 🛠 Backend Setup

Set up a basic **Node.js + Express** server to prepare for future API integration.

### 🎯 Learning Outcomes

By completing this milestone, we learned:

How to structure a **full-stack project**.
Setting up a **React application** with Tailwind CSS.
Configuring a **Node.js backend**.
Creating a **login page** with basic styling and functionality.

### ✅ Submission Details

Code is pushed to the **GitHub repository** created in Milestone 1.
The repository includes:
✅ Proper **folder structure** (frontend & backend).
✅ Functional **Login Page**.
✅ **Updated README** summarizing the progress.
🚀 Ready for the next milestone!

# Project-Milestone-1

This milestone will explain the overall vision, goals, and key features of the e-commerce application.

# E-Commerce Application - Milestone 1

### 📖 Overview

Welcome to the E-Commerce Application built using the powerful MERN stack (MongoDB, Express.js, React.js, Node.js)! This is the first milestone of an exciting journey where we will build a fully functional e-commerce app from scratch. In this milestone, we’ve laid the foundation for the application, establishing the overall structure and setting the stage for the next steps.

### 🌟 Features of the Application

User Authentication:
Secure registration and login system.

### Product Management:

Add, update, and retrieve product details.

### Order Handling:

Seamlessly manage customer orders.

### REST API Integration:

Well-structured endpoints for interaction.

### Database Schema Design:

Efficient schema structure in MongoDB.

### Authentication & Authorization:

Role-based access for secure transactions.

# 🛠️ Core Concepts Covered

## Overview of the MERN Stack

The MERN stack is a widely used set of technologies for developing full-stack web applications:

### MongoDB:

NoSQL database for flexible schema design.

### Express.js:

Lightweight backend framework for building REST APIs.

### React.js:

Frontend library for building user interfaces.

### Node.js:

Runtime for executing JavaScript on the server side. The MERN stack enables a JavaScript-only approach, streamlining development and making it easier to maintain both the frontend and backend using a single language.

# REST API Structure and Endpoints

The project includes a REST API to handle the following tasks:

## User Authentication

### POST /api/auth/register:

Register a new user.

### POST /api/auth/login:

Authenticate an existing user.

# Product Management

### GET /api/products:

Retrieve a list of all products.

### POST /api/products:

Add a new product.

### PUT /api/products/:id:

Update a product by ID.

### DELETE /api/products/:id:

Remove a product by ID.

# Order Handling

### GET /api/orders:

Retrieve all orders.

### POST /api/orders:

Create a new order.

### GET /api/orders/:id:

Retrieve order details by ID.

### Each API endpoint interacts with the MongoDB database and serves structured data in JSON format.

# Basics of Database Schema Design

MongoDB uses a flexible document-based schema. In this project:

### User Schema:

Stores user details (e.g., name, email, password, role).

### Product Schema:

Contains product details (e.g., name, price, description, stock).

### Order Schema:

Tracks orders, including user info, product details, and order status. The schemas are designed to ensure scalability and data integrity.

## Role of Authentication in Web Applications

### Authentication is vital for securing web applications. In this project:

### Users must authenticate to access sensitive features (e.g., placing orders).

### JSON Web Tokens (JWT) are used to handle authentication securely.

### Role-based access ensures that only authorized users can perform specific actions (e.g., admin users managing products).
