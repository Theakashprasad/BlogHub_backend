# BlogHub - Backend
[![Screenshot](https://pomodo.s3.eu-north-1.amazonaws.com/Screenshot+2025-04-08+122357.png)]([https://your-link.com](https://blog-hub-frontend-phi.vercel.app/))

The BlogHub backend is built with Node.js, Express.js, and MongoDB. It handles user authentication using JWT, and provides secure RESTful APIs for blog creation, retrieval, updating, and deletion, ensuring only authors can modify their own posts.

 https://youtu.be/eZ2xl4y49Dg
## Project Structure
```
project-root/
└── backend/
    └── bloghub/
        └── src/
            ├── config/
            │   └── DB
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
  - PopUp action for creating new posts

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
2. Install typeScript
   ```sh
   npx tsc
   ```
4.  **Environment Variables**:

        Ensure that the environment variables are correctly set in a `.env` file, in the location .env.example is located. Here is an example of the required environment variables:

        ```
  

    ```
4. Start the server
   ```sh
   npm start
   ```

