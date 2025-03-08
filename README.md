# **E-commerce Follow-Along Project 🚀**

---

# Milestone 18: Fetch Cart Products 🛒

## Overview

In Milestone 18, we implemented a **backend endpoint for the cart page** that fetches all products stored in the user's cart. This involved writing an API to retrieve cart items based on the user’s email. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to create an API endpoint to fetch cart products for a specific user.  
✅ How to query MongoDB to retrieve only the user's cart items.  
✅ How to send the fetched cart data to the frontend for display.

## Why is This Important? 🤔

- **Personalized Shopping Experience**: Users can see their selected cart items.
- **Efficient Data Fetching**: Retrieves only relevant cart items for the logged-in user.
- **Foundation for Checkout**: Essential for building the next steps in the e-commerce flow.

## Steps Accomplished in Milestone 18 📝

### 1️⃣ Created a Backend Endpoint for the Cart Page

- Built a **GET API endpoint** in the backend to handle requests from the cart page.
- Used **Mongoose queries** to fetch cart items based on the user’s email.

### 2️⃣ Queried MongoDB for User-Specific Cart Items

- Retrieved only the products added to the cart by the logged-in user.
- Ensured that each user's cart remains private and secure.

### 3️⃣ Sent the Fetched Data to the Frontend

- Returned the cart data as a JSON response.
- Prepared the backend to integrate with the cart page display in the frontend.

## Technologies Used 💻

- **Node.js & Express.js**: Created the cart API endpoint.
- **MongoDB & Mongoose**: Queried and retrieved user-specific cart products.

🚀 **Onward to Milestone 19!**

# Milestone 17: Add to Cart Backend Functionality 🛒

## Overview

In Milestone 17, we implemented the **Add to Cart Backend Functionality**, allowing users to add products to their cart and store them in the database. This involved modifying the **user schema**, creating a **cart schema**, and writing a **backend endpoint** to handle cart operations. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to modify the user schema to store cart products.  
✅ How to create a separate cart schema to manage cart data.  
✅ How to write an API endpoint to receive and store cart product details in MongoDB.

## Why is This Important? 🤔

- **Cart Persistence**: Stores selected products in the database, ensuring data is not lost on refresh.
- **User Experience**: Enables users to manage their selected products before checkout.
- **Real-World E-commerce Functionality**: Learning how to implement a cart system is essential for any online store.

## Steps Accomplished in Milestone 17 📝

### 1️⃣ Updated the User Schema to Store Cart Products

- Modified the **User model** to include a cart field.
- Allowed users to have a **cart array** to store selected products.

### 2️⃣ Created a Separate Cart Schema

- Designed a **Cart model** to store cart products efficiently.
- Ensured cart data is linked to the correct user.

### 3️⃣ Built a Backend API Endpoint to Store Cart Data

- Created a **POST API endpoint** to receive and store cart product details.
- Used **Mongoose queries** to update the cart data in the database.

## Technologies Used 💻

- **Node.js & Express.js**: Built the cart API endpoint.
- **MongoDB & Mongoose**: Designed schemas and stored cart data.
- **React.js**: (To be used later for integrating cart functionality in the frontend).

🚀 **Onward to Milestone 18!**

# Milestone 16: Product Info Page 📄

## Overview

In Milestone 16, we created a **Product Info Page** that displays detailed product information. This page allows users to view all product details, select a quantity, and add the product to their cart. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to create a new page to display product details dynamically.  
✅ How to allow users to select a product quantity.  
✅ How to add an "Add to Cart" button to store the selected product.

## Why is This Important? 🤔

- **Enhanced User Experience**: Users can view detailed product descriptions before purchasing.
- **E-commerce Functionality**: Selecting quantity and adding to the cart is a key feature.
- **Improves UI/UX**: Makes the shopping experience more interactive and user-friendly.

## Steps Accomplished in Milestone 16 📝

### 1️⃣ Created a Dynamic Product Info Page

- Built a new **Product Info Page** that displays detailed product data.
- Fetched product information dynamically based on the selected product ID.

### 2️⃣ Added Quantity Selection and "Add to Cart" Button

- Implemented a **quantity selector** to let users choose how many items to buy.
- Created an **Add to Cart** button to store the selected product in the cart.

### 3️⃣ Managed State and Updated UI

- Used **React state** to handle quantity selection and cart updates.
- Ensured smooth user interaction with the cart system.

## Technologies Used 💻

- **React.js**: Created the Product Info Page and managed state.
- **React Router**: Handled navigation to individual product pages.
- **Context API / Redux** (if applicable): Managed cart state globally.

🚀 **Onward to Milestone 17!**

# Milestone 15: Navbar Component 🌐

## Overview

In Milestone 15, we built a **Navbar Component** to improve navigation across the application. This involved creating a reusable **Nav component**, adding links to different pages, and ensuring the navbar is **responsive** for all screen sizes. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to create a reusable **Navbar component**.  
✅ How to use **React Router** to navigate between pages.  
✅ How to make the navbar **responsive** for different screen sizes.

## Why is This Important? 🤔

- **Improves User Experience**: Provides easy navigation across the app.
- **Code Reusability**: The same navbar is used on multiple pages.
- **Scalability**: A well-structured navbar helps in future feature expansions.

## Steps Accomplished in Milestone 15 📝

### 1️⃣ Created a Reusable Navbar Component

- Built a **Navbar component** using React.
- Added navigation links for:
  - **Home**
  - **My Products**
  - **Add Product**
  - **Cart**

### 2️⃣ Integrated Navbar Across All Pages

- Added the **Navbar component** to all key pages.
- Ensured smooth navigation using **React Router**.

### 3️⃣ Made the Navbar Responsive

- Used **CSS Flexbox** and **media queries** to make the navbar responsive.
- Implemented a **hamburger menu** for mobile screens.

## Technologies Used 💻

- **React.js**: Built and reused the Navbar component.
- **React Router**: Handled navigation between pages.
- **CSS & Flexbox**: Styled the navbar for responsiveness.

🚀 **Onward to Milestone 16!**

# Milestone 14: Delete Product Feature 🗑️

## Overview

In Milestone 14, we implemented a **Delete Product Feature** that allows users to remove their uploaded products. This involved adding a **Delete button** to the product card and writing a backend **delete endpoint** to remove the product from MongoDB using its ID. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to write an API endpoint to delete a specific product from MongoDB.  
✅ How to send a delete request from the frontend to remove a product.  
✅ How to update the UI dynamically after product deletion.

## Why is This Important? 🤔

- **User Control**: Allows users to remove outdated or incorrect product listings.
- **Database Management**: Helps in learning how to handle data deletion properly.
- **Improves UX**: Keeps the product list clean and relevant.

## Steps Accomplished in Milestone 14 📝

### 1️⃣ Created an API Endpoint to Delete a Product

- Built a **DELETE API endpoint** in the backend.
- Used **Mongoose’s deleteOne method** to remove the product based on its ID.

### 2️⃣ Added a Delete Button to the Product Card

- Placed a **Delete button** inside the Product Card component.
- Styled it properly for better UI experience.

### 3️⃣ Sent Delete Request and Updated the UI

- When clicked, the button **sends a DELETE request** to the server with the product ID.
- Removed the product from the state to update the UI dynamically.
- Displayed a confirmation message before deletion to prevent accidental removal.

## Technologies Used 💻

- **Node.js & Express.js**: Created the delete API endpoint.
- **MongoDB & Mongoose**: Removed the product from the database.
- **React.js**: Handled delete button click and updated the UI.

🚀 **Onward to Milestone 15!**

# Milestone 13: Edit Product Feature ✏️

## Overview

In Milestone 13, we implemented an **Edit Product Feature** that allows users to update their uploaded products. This involved adding an **Edit button**, prefilling a form with existing product data, and writing a backend **update endpoint** to modify product details in MongoDB. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to write an API endpoint to update existing product data in MongoDB.  
✅ How to prefill a form with existing product details.  
✅ How to handle form updates and save changes to the database.

## Why is This Important? 🤔

- **Enhances User Experience**: Users can correct mistakes or modify product details anytime.
- **Real-World Application**: Understanding update operations is essential for any CRUD-based system.
- **Database Management**: Helps in learning how to modify existing data efficiently.

## Steps Accomplished in Milestone 13 📝

### 1️⃣ Created an API Endpoint to Update Product Data

- Built a **PUT API endpoint** in the backend.
- Used **Mongoose's update query** to modify product details based on the product ID.

### 2️⃣ Added an Edit Button to the Product Card

- Placed an **Edit button** inside the existing Product Card component.
- When clicked, the button opens the product form with prefilled data.

### 3️⃣ Auto-Filled the Product Form and Allowed Editing

- Passed product details to the form via state or props.
- Allowed users to modify the details and submit the updated data.
- Sent the edited data to the backend API to update MongoDB.

## Technologies Used 💻

- **Node.js & Express.js**: Created the update API endpoint.
- **MongoDB & Mongoose**: Updated product details in the database.
- **React.js**: Prefilled form and handled edit functionality.

🚀 **Onward to Milestone 14!**

# Milestone 12: My Products Page 📦

## Overview

In Milestone 12, we created a **My Products Page** that dynamically displays all the products added by the logged-in user. This involved filtering products based on the user's email and rendering them using the existing **Product Card** component. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to write an API endpoint to filter and retrieve products based on the user's email.  
✅ How to fetch the filtered data in the frontend.  
✅ How to dynamically display the products using the Product Card component.

## Why Filter Products by User Email? 🤔

- **Personalized Product Management**: Users can view only their own listed products.
- **Efficient Data Handling**: Fetching only relevant products improves performance.
- **Scalability**: Helps in building user-specific dashboards in the future.

## Steps Accomplished in Milestone 12 📝

### 1️⃣ Created an API Endpoint to Fetch User-Specific Products

- Built a **GET API endpoint** in the backend to retrieve only the products added by the logged-in user.
- Used **Mongoose queries** to filter products based on the user’s email.

### 2️⃣ Fetched Filtered Product Data in the Frontend

- Made an **API request** from the frontend to get only the user's products.
- Managed **state** to store and display the data dynamically.

### 3️⃣ Displayed Products Using the Product Card Component

- Mapped through the filtered product list.
- Passed product details as **props** to the **Product Card** component.
- Rendered the filtered products dynamically on the **My Products Page**.

## Technologies Used 💻

- **Node.js & Express.js**: Backend API to serve filtered product data.
- **MongoDB & Mongoose**: Querying and retrieving user-specific products.
- **React.js**: Fetching and displaying filtered products dynamically.

🚀 **Onward to Milestone 13!**

# **Milestone 11: Displaying Products on Homepage** 🏪

## **Overview**

In **Milestone 11**, we focused on making our **homepage dynamic** by displaying all the products stored in **MongoDB**. This involved **fetching product data from the backend** and rendering it dynamically using the **Product Card component**. 🚀

---

## **Learning Goals** 🎯

By completing this milestone, we learned:

- ✅ How to write an **API endpoint** to retrieve all product data.
- ✅ How to **fetch data in the frontend** using an API call.
- ✅ How to **dynamically display products** using the Product Card component.

---

## **Why Make the Homepage Dynamic?** 🤔

- **Enhances User Experience**: Users can see all available products instantly.
- **Real-Time Updates**: Any new product added is displayed automatically.
- **Efficient Data Handling**: Fetching from the database ensures up-to-date information.

---

## **Steps Accomplished in Milestone 11** 📝

### **1️⃣ Created an API Endpoint to Fetch Products**

- Built a **GET API endpoint** in the backend to **retrieve all product data** from MongoDB.
- Used **Mongoose queries** to fetch the product list.

### **2️⃣ Fetched Product Data in the Frontend**

- Made an **API request** from the frontend to get all products.
- Used **state management** to store and display product data dynamically.

### **3️⃣ Displayed Products Using the Product Card Component**

- Mapped through the **fetched product data**.
- Passed product details as **props** to the **Product Card component**.
- Rendered each product dynamically on the homepage.

---

## **Technologies Used** 💻

- **Node.js & Express.js**: Backend API to serve product data.
- **MongoDB & Mongoose**: Stored and retrieved product data.
- **React.js**: Fetched and displayed products dynamically.

---

🚀 **Onward to Milestone 12!**

# **Milestone 10: Product Schema & API Endpoint** 🌟

## **Overview**

In **Milestone 10**, we focused on creating a **Mongoose schema for products** and setting up an **API endpoint** to store product details in **MongoDB**. This ensures proper data structure, validation, and seamless storage of product information. 🚀

---

## **Learning Goals** 🎯

By completing this milestone, we learned:

- **How to write a Mongoose schema** for product data.
- **How to create a POST API endpoint** to store product details.
- **How to validate product data** before saving it to the database.

---

## **Why Schema & Validation?** 🤔

- **Defines the Product Structure**: Ensures all product data is stored in a consistent format.
- **Maintains Data Integrity**: Prevents incorrect or missing product details from being saved.
- **Improves Database Queries**: Structured data helps in efficient retrieval and filtering.

---

## **Steps Accomplished in Milestone 10** 📝

### **1️⃣ Created the Mongoose Product Schema**

- Defined **product fields** such as:

  - 🏷 **Product Name** (String, required)
  - 📄 **Description** (String, required)
  - 💲 **Price** (Number, required)
  - 📦 **Category** (String, required)
  - 🖼 **Image URLs** (Array of Strings)
  - 📅 **CreatedAt & UpdatedAt** timestamps

- Added **validations** to ensure proper data input.

### **2️⃣ Built the Product API Endpoint**

- **Created a POST API route** to handle product submissions.
- **Validated incoming data** before saving it to MongoDB.
- **Stored the product details** in the database securely.

### **3️⃣ Prepared for Future Enhancements**

- Suggested improvements such as:
  - **Admin Access Control**: Allow only admins to add products.
  - **Shop Profile Feature**: Restrict product uploads to specific shop owners.

---

## **Technologies Used** 💻

- **Node.js & Express.js**: Built the backend server and API.
- **MongoDB & Mongoose**: Created and managed the product schema.
- **Postman**: Tested API requests and responses.

---

🚀 **Onward to Milestone 11!**

# **Milestone 9: Product Form for Adding New Products** 🌟

## **Overview**

In **Milestone 9**, we focused on creating a **frontend form** to allow users to input product details and upload multiple images. This form serves as the foundation for adding new products to our e-commerce platform. 🚀

---

## **Learning Goals** 🎯

By completing this milestone, we learned:

- **How to create a form** to collect product details.
- **How to handle multiple image uploads** within a form.
- **How to prepare product data** for saving in the database.

---

## **Why Create a Product Form?** 🤔

- **Essential for Product Management**: Allows adding new products dynamically.
- **Data Storage & Retrieval**: The collected details will be stored in a database and displayed on the homepage.
- **Scalability & Customization**: Can be extended with features like **admin access control** or **shop-specific profiles**.

---

## **Steps Accomplished in Milestone 9** 📝

### **1️⃣ Created the Product Form**

- Designed a **form with input fields** for product details, including:
  - 📌 **Product Name**
  - 📄 **Description**
  - 💲 **Price**
  - 📦 **Category**
  - 🖼 **Multiple Image Uploads**

### **2️⃣ Implemented Multiple Image Input Handling**

- Configured the form to **accept multiple image files**.
- Utilized **state management** to handle image previews before submission.

### **3️⃣ Prepared for Future Enhancements**

- Suggested improvements such as:
  - **Admin Access Control**: Restrict product addition to admins only.
  - **Shop Profile Feature**: Allow only shop owners to upload products.

---

## **Technologies Used** 💻

- **React.js**: Created the interactive product form.
- **Tailwind CSS / CSS Modules**: Styled the form for a clean UI.
- **State Management (useState)**: Handled form inputs and images.

---

🚀 **Onward to Milestone 10!**

# **Milestone 8: Product Card Component & Homepage Design** 🌟

## **Overview**

In **Milestone 8**, we focused on creating a **Product Card Component** and designing the **Homepage Layout** to dynamically display multiple product cards. The goal was to ensure a clean, structured, and reusable design for showcasing products effectively. 🚀

---

## **Learning Goals** 🎯

By completing this milestone, we learned:

- **How to create a reusable Card Component** to display product details.
- **How to dynamically render multiple cards** using array mapping.
- **How to structure the homepage layout** for a visually appealing product showcase.

---

## **Why Create Card Components?** 🤔

- **Showcase Products Effectively**: Presents product details in a clear and structured way.
- **Reusable Design**: A single component can be used across multiple sections.
- **Improved User Experience**: Makes product browsing more interactive and seamless.
- **Organized Layout**: Ensures a well-structured and responsive design.

---

## **Steps Accomplished in Milestone 8** 📝

### **1️⃣ Created the Product Card Component**

- Designed a **reusable card component** with props for:
  - 🖼 **Product Image**
  - 🏷 **Product Name**
  - 💲 **Product Price**

### **2️⃣ Implemented Dynamic Rendering**

- Used **array mapping** to iterate over the product list.
- Passed **product details dynamically** to each card component.

### **3️⃣ Designed the Homepage Layout**

- Implemented **grid/flexbox layout** to neatly display product cards.
- Ensured a **responsive design** for different screen sizes.

---

## **Technologies Used** 💻

- **React.js**: Built the Product Card Component.
- **Tailwind CSS / CSS Modules**: Styled the card component and homepage layout.

---

🚀 **Onward to Milestone 9!**

# **Milestone 7: Backend Endpoint for User Login** 🔑

## **Overview**

In **Milestone 7**, we implemented the **backend login endpoint** to authenticate users securely. This milestone focuses on **validating user credentials**, comparing **hashed passwords**, and ensuring **secure login authentication**.

---

## **Key Accomplishments**

### 🔐 **User Authentication Implementation**

- Created a **login API endpoint** to authenticate users.
- Fetched **user data** from the database based on the provided email/username.
- Returned an error message if the user **does not exist**.

### 🔄 **Password Hash Comparison**

- Used **bcrypt.js** to compare the user’s **entered password** with the **stored hashed password**.
- Ensured **passwords are never stored in plain text**.
- Implemented **secure error handling** to prevent credential leaks.

### 🔥 **Security Enhancements**

- Enforced **secure password storage** with **hashing** (one-way encryption).
- Implemented **JWT authentication** for **session management**.
- Added **error handling for invalid credentials** to prevent brute-force attacks.

---

## **🎯 Learning Outcomes**

By completing this milestone, we learned:  
✅ How to **validate user credentials** securely.  
✅ How to **compare hashed passwords** using bcrypt.  
✅ How to **implement secure login authentication** in a Node.js backend.  
✅ How to **prevent common security vulnerabilities** in authentication.

---

## **✅ Submission Details**

- Code is pushed to the **Milestone-7 branch** in the GitHub repository.
- The repository includes:
  - ✅ **Login API endpoint** for user authentication.
  - ✅ **Secure password hashing & comparison**.
  - ✅ **Error handling for incorrect credentials**.
  - ✅ **Updated README with Milestone 7 details**.

🚀 **Onward to Milestone 8!**

# **Milestone 6: Backend Endpoint for the SignUp Page** 🌟

## **Overview**

In **Milestone 6**, we focused on creating a **backend endpoint** for the Signup page to securely store user data. The key highlights include **encrypting user passwords** and saving all relevant user details securely in the database. 🚀

---

## **Learning Goals** 🎯

By completing this milestone, we learned:

- **How to encrypt passwords before saving** using hashing mechanisms.
- **How to store user data securely** in the database.

---

## **Why Encrypt Passwords?** 🤔

- **Protect User Data**: Safeguards user passwords if the database is compromised.
- **Ensure Privacy**: Prevents passwords from being visible to anyone.
- **Achieve Compliance**: Meets security standards like **GDPR** and **PCI-DSS**.
- **Prevent Password Theft**: Makes it harder for attackers to steal or guess passwords.

---

## **Steps Accomplished in Milestone 6** 📝

### **1️⃣ Encrypt the Password**

- Utilized **bcrypt** to hash user passwords during signup.
- Stored the **hashed password** in the database instead of plain text.

### **2️⃣ Store Complete User Data**

- Stored all user details (e.g., `name`, `email`) in the database while keeping the password encrypted.

---

## **Technologies Used** 💻

- **Node.js**: Backend server setup
- **Express.js**: Routing and middleware for the Signup API
- **MongoDB**: Database to store user information securely
- **Bcrypt**: For password hashing

---

🚀 **Onward to Milestone 7!**

# **Milestone 5: Sign-Up Page & Form Validation** 🌟

## **Overview**

In **Milestone 5**, we focused on building the **Sign-Up Page** for new users and implementing **form validation** to ensure that user inputs are correctly formatted before submission.

---

## **Key Accomplishments**

### 🏗 **Sign-Up Page UI Development**

- Created a **user-friendly Sign-Up Page** using **React & Tailwind CSS**.
- Designed a clean and modern form with the following fields:
  - **Name**
  - **Email**
  - **Password**

### 🔍 **Form Validation Implementation**

- Ensured that users provide **valid input data** before submitting the form.
- Added **real-time validation** for:
  - ✅ **Email Format Validation** (must be a valid email).
  - ✅ **Password Strength Check** (minimum length requirement).
  - ✅ **Required Fields** (users cannot submit empty fields).

### 🔄 **Connecting the Frontend to Backend**

- Configured the **Sign-Up form** to send user data to the backend API.
- Set up an **API request** using **fetch/Axios** to register new users.

---

## 🎯 **Learning Outcomes**

By completing this milestone, we learned:  
✅ How to **build a responsive Sign-Up Page** in React.  
✅ How to **validate user inputs** before submitting a form.  
✅ How to **send Sign-Up data to the backend API**.  
✅ How to **handle frontend validation errors** effectively.

---

## ✅ **Submission Details**

- Code is pushed to the **Milestone-5 branch** in the GitHub repository.
- The repository includes:
  - ✅ **Sign-Up Page UI (React + Tailwind CSS)**.
  - ✅ **Form validation for email & password**.
  - ✅ **API request to send user data to the backend**.
  - ✅ **Updated README with Milestone 5 details**.

🚀 **Onward to Milestone 6!**

---

# **Milestone 4: User Model, Controllers & File Uploads** 🚀

## **Overview**

In **Milestone 4**, we focused on **creating a User Model, setting up controllers to handle user data, and enabling file uploads using Multer**. These are critical components for managing users in our e-commerce application.

---

## **Key Accomplishments**

### 🏗 **User Model Setup**

- Designed a **User Schema** using **Mongoose**.
- Defined user attributes like **name, email, password, and role**.
- Ensured **password security** using **bcrypt** for hashing.

### 🛠 **User Controller Implementation**

- Created **controllers** to handle user-related operations.
- Added API routes for:
  - ✅ **User Registration**
  - ✅ **User Login & Authentication**
  - ✅ **Fetching User Data**

### 🖼 **File Uploads with Multer**

- Integrated **Multer** for handling **image uploads**.
- Allowed users to **upload profile pictures** securely.
- Configured the backend to **store and retrieve files** efficiently.

---

## 🎯 **Learning Outcomes**

By completing this milestone, we learned:  
✅ How to **create and manage a User Model** in MongoDB.  
✅ How to **set up Express controllers** for user authentication.  
✅ How to **use Multer** to handle **file uploads**.  
✅ How to **structure backend routes** for scalability.

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
