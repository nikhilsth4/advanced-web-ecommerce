# MERN Ecommerce Application with Stripe and Ethereum Integration

## Introduction

This project aims to develop an e-commerce platform that allows users to make purchases using either traditional credit card payments processed through Stripe or cryptocurrencies such as Ethereum. By offering multiple payment options, the platform seeks to enhance accessibility and inclusivity in digital transactions while leveraging the security and transparency benefits of blockchain technology.

## Features

- User authentication and authorization
- Product catalog management
- Shopping cart functionality
- Secure payment processing integration with Stripe and Ethereum
- Order management
- Dashboard for users to view statistics and trends

## Noteworthy Frameworks and Technologies Used

- MongoDB: NoSQL database for storing data
- Express.js: Web application framework for Node.js
- React.js: JavaScript library for building user interfaces
- Node.js: JavaScript runtime environment for server-side logic
- Redux: Predictable state container for managing application state
- OAuth: Open standard for authentication and authorization
- Stripe: Payment processing platform for credit card payments
- Solidity: Programming language for writing smart contracts on Ethereum
- MetaMask: Cryptocurrency wallet and gateway to blockchain apps

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory and change to frontend directory.
3. Install dependencies using npm:
   ```
   npm install
   ```
4. Configure environment variables as needed.
5. Start the development server:
   ```
   npm start
   ```
6. Visit `http://localhost:3000` to view the application in your browser.

7. Navigate to the project directory and change to backend directory.
8. Install dependencies using npm:
   ```
   npm install
   ```
9. Configure environment variables as needed.
10. Start the development server:
    ```
    npm start
    ```
11. Visit `http://localhost:5000` to run the application backend server.

## Configuration

1. **MongoDB**: Ensure MongoDB is installed and running. Configure the connection string in `config/default.json` file in backend.
2. **Stripe Integration**: Obtain API keys from the Stripe dashboard and configure them in the `.env` file in frontend.
3. **Ethereum Integration**: Configure MetaMask wallet and Infura API for Ethereum integration.
4. **OAuth Integration**: Obtain API keys from the OAuth and configure it in the `.env` file in frontend.

## Folder Structure

- **frontend**: Contains the React.js frontend application.
- **backend**: Contains the Node.js backend application.
- **frontend/src/ethereum**: Contains Solidity smart contracts and all the Ethereum integration.

## Implementation

The implementation involves developing frontend components using React.js, managing backend logic with Express.js and Node.js, and integrating payment gateways using Stripe API and Ethereum blockchain. Smart contracts written in Solidity are deployed to the Ethereum blockchain, and users interact with them using MetaMask wallet.
