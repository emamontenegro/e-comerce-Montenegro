# PC Gaming Ecommerce

## Description
This is a frontend-focused ecommerce web application for PC gaming products. It allows users to browse products by categories and subcategories, search for items, add products to a shopping cart, and complete purchases. The application uses Firebase Firestore for data persistence and storage of products and orders. No server-side backend is implemented; all operations are handled client-side with Firebase SDK.

The project demonstrates modern React development practices including component-based architecture, custom hooks, context for state management, and client-side routing.

## Tech Stack
- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Routing**: React Router 7.9.6
- **Backend Services**: Firebase 12.7.0 (Firestore for database)
- **Icons**: React Icons 5.5.0
- **Styling**: CSS modules and global styles
- **Deployment**: Vercel and GitHub Pages
- **Linting**: ESLint 9.36.0

## Architecture
The application follows a single-page application (SPA) architecture built with React. It consists of:

- **Frontend Layer**: React components handling UI and user interactions
- **State Management**: React Context API for global state (cart management)
- **Data Layer**: Custom hooks for data fetching from Firebase Firestore
- **Routing Layer**: React Router for client-side navigation
- **Backend Services**: Firebase Firestore for NoSQL database operations

No traditional backend server exists; Firebase provides the backend-as-a-service functionality. All business logic is implemented in React components and custom hooks.

## Project Structure
```
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── card/        # Product card component
│   │   ├── cartitem/    # Cart item display
│   │   ├── categorieslist/  # Category navigation
│   │   ├── checkoutform/    # Purchase form
│   │   ├── itemdetail/      # Product detail view
│   │   ├── itemlist/        # Product list display
│   │   ├── offerCarousel/   # Featured offers carousel
│   │   ├── preorder/        # Order summary
│   │   └── searcher/        # Search input component
│   └── layout/          # Layout components
│       ├── cart/        # Cart page layout
│       ├── footer/      # Site footer
│       └── header/      # Site header with navigation
├── context/
│   └── auth/            # Cart context (misnamed, handles cart state)
├── hooks/               # Custom React hooks
│   ├── search.js        # Product filtering hook
│   ├── useProductCounter.js  # Quantity counter hook
│   └── useProducts.js   # Product data fetching hook
├── pages/               # Route-based page components
│   ├── addproducts/     # Admin product addition (incomplete)
│   ├── admin/           # Admin dashboard (placeholder)
│   ├── cart/            # Shopping cart page
│   ├── contact/         # Contact information page
│   ├── detailsproducts/ # Product detail page
│   ├── home/            # Homepage with featured offers
│   ├── order/           # Order confirmation page
│   └── shop/            # Product catalog page
├── services/            # Data services
│   ├── categoryarray.js # Static category definitions
│   ├── firebase/        # Firebase service functions
│   │   ├── orders.js    # Order CRUD operations
│   │   └── products.js  # Product CRUD operations
│   └── mocks/           # Mock data (unused in production)
└── utils/
    └── firebase.js      # Firebase configuration
```

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-js-proyect
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. No environment variables are required as Firebase configuration is hardcoded in `src/utils/firebase.js`.

4. Run the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173` (default Vite port).

## Available Scripts
- `npm run dev`: Starts the development server with hot reloading
- `npm run build`: Builds the application for production
- `npm run lint`: Runs ESLint to check code quality
- `npm run preview`: Previews the production build locally
- `npm run predeploy`: Builds the application (runs before deploy)
- `npm run deploy`: Deploys to GitHub Pages using gh-pages

## API Reference
No REST API endpoints exist as the application uses Firebase SDK directly. Data operations are performed through Firebase service functions:

### Products Service (`src/services/firebase/products.js`)
- `obtenerProductos()`: Retrieves all products from Firestore
- `obtenerProductoPorId(id)`: Retrieves a single product by ID
- `crearProducto(producto)`: Creates a new product (admin functionality)
- `actualizarProducto(id, productoActualizado)`: Updates an existing product
- `eliminarProducto(id)`: Deletes a product

### Orders Service (`src/services/firebase/orders.js`)
- `createOrder({ cart, total })`: Creates a new order with cart items
- `getOrderById(orderId)`: Retrieves order details by ID

All functions return Promises and handle Firestore operations asynchronously.

## Database
- **Type**: NoSQL (Firebase Firestore)
- **Collections**:
  - `products`: Stores product information including title, price, stock, category, subcategory, offer status
  - `orders`: Stores order information including items array, total amount, and timestamp

No database schemas are defined; Firestore is schema-less. Product documents contain fields like `id`, `title`, `price`, `stock`, `category`, `subcategory`, `offer`, `description`, `image`.

## Features
- **Product Catalog**: Browse products with pagination and filtering
- **Category Navigation**: Filter products by main categories (GPU, CPU, etc.) and subcategories
- **Search Functionality**: Search products by title, category, or subcategory
- **Shopping Cart**: Add/remove items, adjust quantities, persistent storage in localStorage
- **Checkout Process**: Form-based checkout with order creation
- **Order Confirmation**: View order details after purchase
- **Responsive Design**: Mobile and desktop optimized UI
- **Featured Offers**: Carousel display of products on offer
- **Admin Panel**: Basic product addition functionality (incomplete)

## Usage Flow
1. User visits homepage and sees featured offers
2. Browses shop page with category filtering and search
3. Clicks on product cards to view detailed information
4. Adds desired products to cart with quantity controls
5. Proceeds to cart page to review items and totals
6. Completes checkout form to create order
7. Redirected to order confirmation page with order ID

## Error Handling
- Network errors during Firebase operations are caught in try-catch blocks within hooks
- Loading states are displayed during data fetching
- Stock validation prevents adding out-of-stock items to cart
- Invalid routes are handled by React Router (404 not explicitly implemented)

## Future Improvements
- Implement user authentication with Firebase Auth
- Complete admin panel for product management
- Add user account management and order history
- Implement real-time inventory updates
- Add payment integration (currently mock checkout)
- Enhance error handling with user-friendly error messages
- Add product reviews and ratings
- Implement wishlist functionality
- Add email notifications for orders
- Optimize performance with lazy loading and caching

## Author
Emanuel Montenegro - Frontend Developer  
[LinkedIn](https://linkedin.com/in/emanuelmontenegro) | [GitHub](https://github.com/emamontenegro) | emanuelmontenegro.dev@gmail.com

## 🛠️ Tech Stack

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **Firebase (Firestore)**
- **React Router**
- **Context API**

## ✨ Features

- Dynamic product listing fetched from Firebase
- Shopping cart with global state management
- Order persistence in Firebase Firestore
- Client-side navigation without page reloads
- Responsive layout across multiple screen sizes

## 🌐 Live Demo

👉 https://e-comerce-montenegro.vercel.app/

## 📌 Project Status

✅ Completed
