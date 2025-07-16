# SaleWebsite_QLDA

A professional e-commerce web application designed for seamless online sales management.

## Overview

SaleWebsite_QLDA is a full-stack project focused on providing an online sales platform with a modern, responsive frontend and a robust, scalable backend. The project leverages powerful open-source frameworks and libraries to deliver a performant and maintainable solution.

## Technologies Used

### Frontend

- **React**: Core library for building the user interface.
- **Next.js**: Framework for server-side rendering and optimized React applications.
- **Vite**: Fast development server and build tool.
- **Bootstrap & React-Bootstrap**: For responsive design and pre-built UI components.
- **Redux Toolkit & React Redux**: State management for complex application state.
- **Axios**: Promise-based HTTP client for API requests.
- **React Router DOM**: Declarative routing for React applications.
- **React Hook Form**: For managing form state and validation.
- **Sass**: CSS preprocessor for enhanced styling capabilities.
- **FontAwesome**: Icon library.
- **AOS (Animate On Scroll)**: Scroll animations.
- **React Toastify**: To display notifications.
- **Iconsax-React**: Icon set for React.
- **Meilisearch**: Fast search integration.
- **Stripe.js & React Stripe.js**: For secure payment processing.

### Backend

- **Strapi**: Open-source headless CMS for content and API management.
- **Node.js**: JavaScript runtime environment.
- **Strapi Plugins**:
  - `@strapi/plugin-users-permissions`: User authentication and access control.
  - `@strapi/plugin-i18n`: Internationalization support.
  - `strapi-plugin-meilisearch`: MeiliSearch integration for fast search.
  - `@strapi/plugin-cloud`: Strapi Cloud support.

#### Database

- **SQLite** (default for development)
- **MySQL/MySQL2** or **PostgreSQL** (configurable for production)
- Database configuration is flexible and managed via environment variables.

#### Payment Integration

- **Stripe**: Used for processing payments and handling checkout sessions securely.

## Features

- Product and category management
- User authentication and permission management
- Order processing with Stripe integration
- Search functionality powered by MeiliSearch
- Responsive UI with modern React and Bootstrap
- Internationalization support
- Customizable and extensible architecture

## Getting Started

### Prerequisites

- Node.js (v18.x - v20.x recommended)
- npm (v6.x or above)
- (Optional) MySQL or PostgreSQL for production database

### Installation

#### Backend (Strapi)

```bash
cd REACT
npm install
npm run develop    # Starts Strapi in development mode
```

#### Frontend

```bash
cd FONTEND/FRONT_END
npm install
npm run dev        # Starts the frontend development server
```

### Configuration

- Update environment variables for database and Stripe credentials as needed.
- See `REACT/config/database.js` for detailed database configuration.
- Stripe keys must be set in the environment for payment to function.

## Project Structure

- `REACT/` — Strapi backend application
- `FONTEND/FRONT_END/` — React frontend application

## License

This project is licensed under the MIT License.

---

> **Note:**  
> This README was generated based on the currently available project files. For more details, please refer to the [GitHub repository](https://github.com/Xhoangduy/SaleWebsite_QLDA).
