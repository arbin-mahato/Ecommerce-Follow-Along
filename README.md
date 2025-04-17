# **E-commerce Follow-Along Project 🚀**

---

# Milestone 31: Redux Global State Management 🌍

## Overview

In Milestone 31, we learned how to implement **Redux** to manage global state across our application. This allows us to store and access shared data like the user’s email anywhere in the app.

## Learning Goals 🎯

✅ Understand the purpose and usage of Redux.  
✅ Create a centralized Redux store to manage global state.  
✅ Store the user’s email in the global state for universal access.

## Why is This Important? 🤔

- **Centralized State Management**: Keeps global data in one place.
- **Reusability**: Access shared state from any component.
- **Scalability**: Easier to manage state in larger apps.

## Steps Accomplished in Milestone 31 📝

### 1️⃣ Installed Redux Dependencies

- Installed `react-redux` using npm.

### 2️⃣ Created Store Folder

- Created a `store/` folder containing:
  - `store.js`: Configured the Redux store.
  - `userActions.js`: Contains actions for setting user email.

### 3️⃣ Built Redux Logic

- Defined a `userReducer` to manage user email.
- Wrote a `setEmail` action to store user email in global state.

### 4️⃣ Wrapped App with Redux Provider

- Wrapped the main `<App />` inside `<Provider>` in `index.js` with the Redux store passed as a prop.

## Technologies Used 💻

- **React.js**
- **Redux**
- **react-redux**

🚀 **Onward to Milestone 32!**

# Milestone 30: PayPal Online Payment Integration 💳

## Overview

In Milestone 30, we successfully integrated **PayPal online payment** into our e-commerce application! This builds on the previous milestone where we set up a PayPal developer account and obtained the Client ID. Now, we implemented the actual PayPal payment flow using the `react-paypal-js` package. 💸

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to integrate **PayPal API** into a React project.  
✅ How to use the **PayPalScriptProvider** and **PayPalButtons** components.  
✅ How to dynamically offer both **Cash on Delivery (COD)** and **Online Payment** options.

## Why is This Important? 🤔

- Enables **secure online payments** for users.
- Makes the application feel more professional and real-world.
- Teaches real payment integration using a global platform like PayPal.

## Steps Accomplished in Milestone 30 📝

### 1️⃣ Set Up PayPal Integration

- Installed `react-paypal-js` via NPM.
- Used the **PayPalScriptProvider** with the sandbox **Client ID** obtained in Milestone 29.
- Integrated **PayPalButtons** to render online payment methods.

### 2️⃣ Updated Order Confirmation Page

- Added radio buttons to select between **COD** and **Online Payment**.
- On selecting **Online Payment**, PayPal payment buttons are displayed.
- Payment logic is now functional using PayPal's secure API.

## Technologies Used 💻

- **React.js**: Frontend UI components.
- **PayPal API**: Online payment integration.
- **react-paypal-js**: Official PayPal React SDK.

🚀 **Up next: more polish and finishing touches to the app!**

# Milestone 29: Integrate PayPal Payment Gateway 💳

## Overview

In Milestone 29, we prepared our application for **online payments** by integrating the **PayPal API**. This involved setting up a PayPal Developer account, collecting sandbox credentials, and modifying the frontend to support **Cash on Delivery (COD)** and **PayPal** options for users during checkout.

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to create and configure a PayPal Developer account.  
✅ How to access and use **sandbox credentials** for testing.  
✅ How to add radio buttons to toggle between **COD** and **PayPal** payment methods.  
✅ How to dynamically show the PayPal button when the user selects online payment.

## Why is This Important? 🤔

- **Real-World Experience**: Payment gateway integration is essential in any real-world e-commerce app.
- **Secure Transactions**: Helps users feel confident when purchasing.
- **Flexible Checkout**: Offers both online and offline payment options for better UX.

## Steps Accomplished in Milestone 29 📝

### 1️⃣ Setup PayPal Developer Account

- Created a PayPal Developer account.
- Generated a **sandbox business and personal account**.
- Copied the **Client ID** from the dashboard for integration.

### 2️⃣ Updated the Order Confirmation Page

- Added two radio buttons: **Cash on Delivery (COD)** and **Online Payment**.
- When **Online Payment** is selected, a container is prepared to render PayPal buttons.

### 3️⃣ Next Steps

- In the next milestone, we’ll write the code to render and process payments using the PayPal button.

## Technologies Used 💻

- **PayPal API (Sandbox)**: For simulating online transactions.
- **React.js**: For managing state and conditional rendering of payment options.

🚀 **Onward to Milestone 30 – Let’s power up the PayPal buttons!**

# Milestone 28: Cancel Order Feature ❌

## Overview

In Milestone 28, we implemented a **Cancel Order** feature that allows users to cancel their previously placed orders from the **My Orders** page. This included adding a **Cancel button** on the frontend and creating a backend **cancel endpoint** to update the order status in MongoDB. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to create a backend endpoint to cancel a specific order.  
✅ How to identify and update the order status in the database.  
✅ How to conditionally render UI elements based on order status.

## Why is This Important? 🤔

- **User Flexibility**: Users can manage their orders with more control.
- **Real-World Functionality**: Mirrors real e-commerce behavior.
- **Database Handling**: Understanding how to perform partial updates efficiently.

## Steps Accomplished in Milestone 28 📝

### 1️⃣ Added Cancel Button on My Orders Page

- For each order item, a **Cancel Order** button was added.
- If the order status is already **cancelled**, the button is **not displayed**.

### 2️⃣ Created Cancel Order Backend Endpoint

- Built a **PUT API endpoint** that accepts an `orderId`.
- Retrieved the order from the database using the ID.
- Updated the status field to `cancelled` and saved the changes.

### 3️⃣ Connected Frontend to Backend

- When the **Cancel Order** button is clicked, a **PUT request** is sent to the cancel endpoint.
- On success, the frontend reflects the updated status dynamically.

## Technologies Used 💻

- **Node.js & Express.js**: Handled cancel order request.
- **MongoDB & Mongoose**: Updated order status.
- **React.js**: Managed UI state and conditional rendering.

🚀 **Onward to Milestone 29!**

# Milestone 27: My Orders Page 📦

## Overview

In Milestone 27, we created a **My Orders Page** on the frontend to display all the orders placed by the user. This page fetches the order data using the backend endpoint built in Milestone 26 and presents each order in a structured, user-friendly layout. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to create a dedicated page to list all user-specific orders.  
✅ How to send a GET request with the user's email to retrieve orders.  
✅ How to integrate the page with the Navbar for better accessibility.

## Why is This Important? 🤔

- **User Transparency**: Users can see the status and details of all their past orders.
- **Order Management**: Helps users track their purchases.
- **Improved UX**: Enhances the overall flow of the e-commerce platform.

## Steps Accomplished in Milestone 27 📝

### 1️⃣ Created a New Frontend Page for My Orders

- Designed and built a **My Orders page** in the frontend.
- Structured the page to clearly display order information (product, quantity, delivery address, etc).

### 2️⃣ Fetched Orders Using the User's Email

- Sent a **GET request** to the backend `/my-orders` endpoint.
- Passed the **user's email** as a parameter to fetch relevant orders.

### 3️⃣ Displayed Orders in the UI

- Mapped through the received data and displayed each order.
- Added styling for a clean and readable layout.

### 4️⃣ Added "My Orders" Page to Navbar

- Included a **"My Orders" link** in the Navbar for easy navigation.
- Ensured routing works correctly to the new page.

## Technologies Used 💻

- **React.js**: Built the My Orders page and handled API calls.
- **Express.js & MongoDB**: Backend data retrieval from the orders collection.
- **React Router**: Navigated between My Orders and other pages.

🚀 **Onward to Milestone 28!**

# Milestone 26: Fetch User Orders 📦

## Overview

In Milestone 26, we implemented a **Get User Orders Feature** that allows users to retrieve all their past orders. This involved writing a backend **GET API endpoint** to fetch orders from the database based on the user's email. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to write an API endpoint to retrieve all orders for a specific user.  
✅ How to query MongoDB using the user’s email to get their orders.  
✅ How to send the retrieved orders as a response to the frontend.

## Why is This Important? 🤔

- **Order Tracking**: Users can view their past orders.
- **Enhanced User Experience**: Provides order history functionality.
- **Database Querying**: Helps in understanding how to fetch user-specific data.

## Steps Accomplished in Milestone 26 📝

### 1️⃣ Created an API Endpoint to Fetch User Orders

- Built a **GET API endpoint** in the backend.
- Retrieved the user’s `_id` from the database using their email.
- Queried MongoDB to fetch all orders associated with the user’s `_id`.

### 2️⃣ Sent User Orders as a Response

- Returned all orders in JSON format.
- Handled error cases where no orders were found.

## Technologies Used 💻

- **Node.js & Express.js**: Created the orders retrieval API.
- **MongoDB & Mongoose**: Queried orders based on the user’s `_id`.

🚀 **Onward to Milestone 27!**

# Milestone 25: Place Order Backend Endpoint 🛒

## Overview

In Milestone 25, we implemented a **Place Order Backend Endpoint** to store order details in MongoDB. This involved receiving product, user, and address details, retrieving the user ID using email, and saving each product as a separate order entry. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to create an API endpoint to place orders.  
✅ How to retrieve the user ID from email.  
✅ How to store order details in the database.

## Why is This Important? 🤔

- **Order Management**: Enables users to place orders seamlessly.
- **Database Handling**: Strengthens understanding of MongoDB operations.
- **E-commerce Workflow**: Completes the order placement functionality.

## Steps Accomplished in Milestone 25 📝

### 1️⃣ Created an API Endpoint to Place Orders

- Built a **POST API endpoint** to receive product, user, and address details.
- Extracted the user ID using the provided email.

### 2️⃣ Stored Orders in the Database

- Used the **Order Schema** to save order details.
- Ensured each product in the cart was stored as a separate order.

## Technologies Used 💻

- **Node.js & Express.js**: Created the order placement API.
- **MongoDB & Mongoose**: Stored order details in the database.

🚀 **Onward to Milestone 26!**

# Milestone 24: Order Confirmation Page ✅

## Overview

In Milestone 24, we created an **Order Confirmation Page** where users can review their order details before placing the order. This page displays the ordered products, selected delivery address, and total price. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to create an **Order Confirmation Page** in the frontend.  
✅ How to display **ordered products**, **selected address**, and **total price**.  
✅ How to add a **Place Order** button to finalize the order.

## Why is This Important? 🤔

- **Enhances User Experience**: Ensures users can review their order before finalizing it.
- **E-commerce Best Practice**: A common feature in all online stores.
- **Prepares for Backend Integration**: This sets the stage for order placement and payment processing.

## Steps Accomplished in Milestone 24 📝

### 1️⃣ Displayed Ordered Products

- Fetched the **list of products** from the cart.
- Rendered all the **ordered products** with their details.

### 2️⃣ Displayed Selected Delivery Address

- Retrieved the **user's selected address** from the state or backend.
- Showed **full address details** on the confirmation page.

### 3️⃣ Displayed Total Cart Value

- Calculated and displayed the **total price** of all products in the cart.

### 4️⃣ Added a Place Order Button

- Positioned a **Place Order** button at the bottom of the page.
- Clicking this button will trigger the **final order placement process** (handled in the next milestone).

## Technologies Used 💻

- **React.js**: Built the Order Confirmation UI.
- **State Management**: Stored and displayed product and address data dynamically.

🚀 **Onward to Milestone 25!**

# Milestone 23: Select Address & Order Schema 📦

## Overview

In Milestone 23, we implemented a **Select Address Page** in the frontend and created an **Order Schema** in the backend. This involved adding a **Place Order** button, displaying saved addresses for selection, and defining a schema to store order details in MongoDB. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to navigate to a **Select Address Page** when placing an order.  
✅ How to fetch and display all saved addresses for user selection.  
✅ How to design a **Mongoose Order Schema** to store order details.

## Why is This Important? 🤔

- **Order Processing**: Essential for handling user orders.
- **User Experience**: Simplifies the checkout process.
- **Database Structuring**: Helps in managing order-related data efficiently.

## Steps Accomplished in Milestone 23 📝

### 1️⃣ Added a "Place Order" Button in the Cart Page

- Placed a **Place Order** button inside the cart page.
- When clicked, navigates the user to the **Select Address Page**.

### 2️⃣ Created a Select Address Page

- Displayed all saved addresses for the logged-in user.
- Allowed users to select a **delivery address** before placing an order.

### 3️⃣ Wrote a Backend Endpoint to Fetch User Addresses

- Created a **GET API endpoint** that retrieves all addresses stored in the user's profile.
- Connected the frontend to this endpoint to display addresses dynamically.

### 4️⃣ Designed an Order Schema in Mongoose

- Created a **schema to store order details** in MongoDB.
- Included fields for user details, selected address, product list, and order status.

## Technologies Used 💻

- **Node.js & Express.js**: Created the API endpoint to fetch addresses.
- **MongoDB & Mongoose**: Stored addresses and designed the order schema.
- **React.js**: Created the Select Address Page and handled navigation.

🚀 **Onward to Milestone 24!**

# Milestone 22: Save Address in User Profile 📍

## Overview

In Milestone 22, we implemented a **Save Address Feature** that allows users to store their address details inside their profile. This involved creating a **backend API endpoint** to receive address data from the frontend and updating the **user collection** in MongoDB. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to create a backend endpoint to store user address data.  
✅ How to update the user collection by adding an address.  
✅ How to send address data from the frontend to the backend.

## Why is This Important? 🤔

- **Enhances User Experience**: Enables users to save their address for future orders.
- **Real-World Application**: Storing addresses is a key feature in e-commerce platforms.
- **Database Management**: Helps in understanding how to update nested arrays in MongoDB.

## Steps Accomplished in Milestone 22 📝

### 1️⃣ Created an API Endpoint to Save Address

- Built a **POST API endpoint** in the backend.
- The endpoint receives address details from the frontend and updates the **user’s profile** in MongoDB.

### 2️⃣ Updated the User Collection in MongoDB

- Modified the **User schema** to include an `addresses` array.
- Used **Mongoose's update method** to append new addresses to the user profile.

### 3️⃣ Sent Address Data from the Frontend

- Collected address input from the **address form** in the frontend.
- Sent a **POST request** with the address data to the backend API.
- Successfully updated the address section in the **Profile Page**.

## Technologies Used 💻

- **Node.js & Express.js**: Created the address storage API.
- **MongoDB & Mongoose**: Stored and managed user address data.
- **React.js**: Handled address form submission and API request.

🚀 **Onward to Milestone 23!**

# Milestone 21: Address Form Page 🏠

## Overview

In Milestone 21, we implemented an **Address Form Page** that allows users to input and store their address details. This involved creating a **frontend form**, managing state for address input, and navigating from the profile page. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to create a form for address input.  
✅ How to manage form state to store user input.  
✅ How to navigate from the profile page to the address form page.

## Why is This Important? 🤔

- **Personalization**: Enables users to add and manage addresses for orders.
- **Form Handling**: Helps in learning how to handle complex form inputs efficiently.
- **Navigation Flow**: Ensures smooth navigation between profile and address form pages.

## Steps Accomplished in Milestone 21 📝

### 1️⃣ Created the Address Form Page

- Designed a **frontend form** to take user address details.
- Included fields for **Country, City, Address1, Address2, Zip Code, and Address Type**.

### 2️⃣ Managed Address Input Using State

- Used **React state** to store user input dynamically.
- Ensured form fields update correctly as users type.

### 3️⃣ Linked the Profile Page to the Address Form

- Clicking the **"Add Address"** button in the profile page navigates to the form.
- Ensured proper routing between profile and address form pages.

## Technologies Used 💻

- **React.js**: Built the address form page and managed state.
- **React Router**: Handled navigation from the profile page.

🚀 **Onward to Milestone 22!**

# Milestone 20: Profile Page 🏠

## Overview

In Milestone 20, we implemented a **Profile Page** that displays user information and addresses. This involved creating a **backend API** to fetch user details and designing a **frontend UI** to show the profile picture, name, email, and addresses. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to write an API endpoint to fetch user data from MongoDB.  
✅ How to design a profile page with user details and addresses.  
✅ How to display an "Add Address" button for updating user info.

## Why is This Important? 🤔

- **Personalized Experience**: Users can view their profile and manage their addresses.
- **Real-World Functionality**: Understanding user account management is crucial for web applications.
- **Database Querying**: Learn how to fetch user-specific data efficiently.

## Steps Accomplished in Milestone 20 📝

### 1️⃣ Created a Backend Endpoint to Fetch User Data

- Built a **GET API endpoint** in the backend.
- Used **Mongoose queries** to retrieve user details using their email.

### 2️⃣ Designed the Profile Page UI in Frontend

- Displayed **profile photo, name, and email** in a separate section.
- Showed **address details** in another section.
- Added a **"No address found"** message when no address is available.

### 3️⃣ Added an "Add Address" Button

- Provided an option to add an address for better user management.
- Ensured a clean and responsive UI for all screen sizes.

## Technologies Used 💻

- **Node.js & Express.js**: Created the API to fetch user details.
- **MongoDB & Mongoose**: Retrieved user profile data from the database.
- **React.js**: Built the frontend UI for the profile page.

🚀 **Onward to Milestone 21!**

# Milestone 19: Cart Page & Quantity Update Feature 🛒

## Overview

In Milestone 19, we implemented the **Cart Page UI** and added functionality to **increase or decrease product quantity** inside the cart. This involved creating a frontend cart page, displaying cart products using the backend API, and adding **+/- buttons** to update quantity. 🚀

## Learning Goals 🎯

By completing this milestone, we learned:

✅ How to create a **Cart Page UI** and display products inside the cart.  
✅ How to add **increase (+) and decrease (-) buttons** for product quantity.  
✅ How to write an **API endpoint** to update quantity in the database.

## Why is This Important? 🤔

- **Enhances Shopping Experience**: Users can modify cart quantities before checkout.
- **Backend-Frontend Integration**: Strengthens understanding of handling **update operations**.
- **Database Management**: Allows modifying **existing cart data** dynamically.

## Steps Accomplished in Milestone 19 📝

### 1️⃣ Created the Cart Page UI

- Built a **Cart Page** to display products stored in the cart.
- Fetched **cart product data** from the backend (from Milestone 18).
- Designed a structured layout for better **UX and responsiveness**.

### 2️⃣ Added Quantity Update Feature

- Added **+ and - buttons** next to each product to modify quantity.
- Handled **state updates** to reflect changes in the UI dynamically.

### 3️⃣ Created an API Endpoint for Quantity Updates

- Built a **PUT API endpoint** in the backend to modify product quantity in the cart.
- Used **MongoDB update queries** to increase or decrease quantity based on user actions.

## Technologies Used 💻

- **Node.js & Express.js**: Created the update quantity API endpoint.
- **MongoDB & Mongoose**: Stored and updated product quantities dynamically.
- **React.js**: Built the cart page UI and managed state for quantity updates.

🚀 **Onward to Milestone 20!**

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
