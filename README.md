# BlogHub - Backend

The BlogHub backend is built with Node.js, Express.js, and MongoDB. It handles user authentication using JWT, and provides secure RESTful APIs for blog creation, retrieval, updating, and deletion, ensuring only authors can modify their own posts.

## Project Structure
```
project-root/
└── backend/
    └── bloghub/
        └── src/
            ├── config/
            │   └── ... (config files here)
            │
            ├── controllers/
            │   ├── authController.ts
            │   ├── blogController.ts
            │   └── userController.ts
            │
            ├── interfaces/
            │   ├── blogInterface.ts
            │   ├── multerInterface.ts
            │   └── userInterface.ts
            │
            ├── middleware/
            │   ├── authenticationMiddleware.ts
            │   └── uploadMiddleware.ts
            │
            ├── models/
            │   ├── blog.ts
            │   └── user.ts
            │
            ├── routes/
            │   ├── authRouter.ts
            │   ├── blogRouter.ts
            │   └── userRouter.ts
            │
            ├── utils/
            │   ├── jwt.ts
            │   └── password.ts
            │
            └── server.ts
```
## Features

- User registration and authentication
  - Login
  - Registration
  - Blog Management 
- CRUD operations for blog 
  - Listing blog posts
  - Inline delete & edit options
  - Popup action for creating new posts

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT for authentication

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository
   ```sh
   https://github.com/Theakashprasad/BlogHub_backend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
2. Install NPM packages
   ```sh
   npx tsc
   ```
4.  **Environment Variables**:

        Ensure that the environment variables are correctly set in a `.env` file, in the location .env.example is located. Here is an example of the required environment variables:

        ```plaintext
        MONGODB_URI=mongodb://root:password123@mongodb-primary:27017/
        PORT=3000
        REDIS_PASS=password
        REDIS_URI=redis://default:${REDIS_PASS}@redis:6379
    ```
4. Start the server
   ```sh
   npm start
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
