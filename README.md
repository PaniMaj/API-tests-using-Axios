# API Tests with Axios for Conduit Application

This project contains API tests using Axios for the Conduit application. These tests are built locally and require Docker environment to run the Conduit application.

## Links

- **[Axios documentation](https://axios-http.com/docs/intro)**
- **[Conduit App](https://github.com/cypress-io/cypress-example-conduit-app)**

## Requirements

1. **Docker**: The Conduit application is run within a Docker container. Make sure you have Docker installed on your system.
2. **Node.js**: The project utilizes Node.js. Make sure you have Node.js installed on your system.
3. **Git**: To clone this project, you will need Git version control software.
4. **Axios**: Axios is a promise-based HTTP client for the browser and Node.js. Install it using npm:
   ```sh
   npm install axios
   ```
5. **Chai**: Chai is an assertion library for Node.js and the browser. Install it using npm:
   ```sh
   npm install chai
   ```
6. **Mocha**: Mocha is a feature-rich JavaScript test framework running on Node.js. Install it using npm:
   ```sh
   npm install mocha
   ```
7. **Faker**: Fake (but realistic) data generator for testing

## How to chceck project:

1. **Clone the repository**: Clone this repository to your local environment
   ```sh
   git clone https://github.com/PaniMaj/API-tests-using-Axios.git
   ```

2. **Navigate to the project directory**: Navigate to the project directory using a terminal or command prompt.

3. **Run the Conduit application**: Use Docker to run the Conduit application locally. In the project directory, execute the command:
   ```sh
   docker compose up --build
   ```

   By default UI server is running on port 4100.
   By default API server is running on port 3000.
   This command will start Docker containers for the Conduit application and its database.

4. **Install dependencies**: Navigate to the API tests directory and install project required dependencies by running:
   ```sh
   npm install
   ```

5. **Run the tests**: After installing dependencies, run the API tests using the command:
   ```sh
   npx mocha <test_file_name.js>
   ```

## Project Structure

.
├── api-tests/ # Directory containing API tests
│ ├── constants
│ ├── functions
│ ├── test
│ │ ├── articles # Folder with API tests for articles functionality
│ │ ├── authorization # Folder with API tests for authorization functionality
│ │ ├── comments # Folder with API tests for comments functionality
│ │ └── user_profile # Folder with API tests for user profile functionality
│ └── ...
└── README.md # This file

## Author

Tests in this project was created by Majka Tuzimek / PaniMaj.
