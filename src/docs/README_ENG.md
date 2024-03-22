# GardenProject

GardenProject is a web application for an online store offering a wide range of products for gardening and horticulture. The application provides a convenient platform for browsing and purchasing products, helping users find everything they need for their garden or vegetable plot in one place.

## Getting Started

### Prerequisites

Before installing and running the application, make sure you have the following installed on your computer:

- Node.js - a JavaScript runtime that allows you to run applications on the server side.
- npm (Node Package Manager) - a package manager for JavaScript that allows you to install third-party libraries and tools.

### Installation

To install GardenProject, follow these steps:

1. Clone the project repository to your local computer:
   git clone [repository URL]

2. Navigate to the project directory:
   cd GardenProject

3. Install the necessary dependencies using npm:
   npm install

4. Launch the application in development mode:
   npm run dev

5. Open [http://localhost:5173] in your browser to view the application.

# Connecting Backend

This backend will allow you to execute the project.

[Backend link](https://github.com/HaykInanc/telran_project_backend)

This is an API that you need to download and run locally. You don't need to change or modify it. This project will represent the backend of your project.

## Commands to Run the API

### `npm i`

Install necessary dependencies.

### `npm run dev`

Run the API in development mode.

## Application Navigation

- **Main Page (MainPage.jsx):** Provides an overview of available features and quick access to main sections of the application.
- **Categories Page (CategoriesPage.jsx):** Allows browsing product categories.
- **Products Page (ProductsPage.jsx):** Provides detailed view of products with options to add to cart or wishlist.
- **Single Product Page (SingleProductPage.jsx):** Displays detailed information about a selected product, including description, price, selection options, and purchase button.
- **Cart Page (CartPage.jsx):** Users can view products added to their cart, edit quantities, or remove items from the cart, as well as proceed to checkout.
- **Liked Products Page (LikedProductsPage.jsx):** Allows users to view products they have marked as liked.
- **Sales Page (AllSalesPage.jsx):** Presents current promotions and discounts available in the application. Users can browse promotional products and learn details about offers.
- **Error Page (ErrorPage.jsx):** Displayed when a user tries to access a page that does not exist or when an error occurs.

## Key Features

### Product Management

- **Product Browsing:** Users can browse a list of products on the products page (`ProductsPage.jsx`) and get detailed information by navigating to the single product page (`SingleProductPage.jsx`).

- **Adding to Cart:** Users can add items to their cart (`CartPage.jsx`), allowing them to organize and track their potential purchases.

- **Adding to Wishlist:** Users can mark products as favorites (`LikedProductsPage.jsx`), making it easier to return to these items in the future.

### Interactive Cart

- **Cart Management:** Users can change the quantity of items in the cart, remove items, and view the total order cost.

### Sales System

- **Viewing Sales:** Users can browse current promotions and special offers on the sales page (`AllSalesPage.jsx`), allowing them to make advantageous purchases.

### Navigation and Error Handling

- **Site Navigation:** The application provides convenient navigation to various pages and sections.

- **Error Handling:** In case of errors or attempts to access a non-existent page, users will be redirected to the error page (`ErrorPage.jsx`), which provides information about the encountered problem and possible solutions.

## Contributing to the Project

We welcome contributions to the development of our project. If you'd like to suggest improvements or new features, please create a pull request or discuss your ideas in the issues section.
