# ecommerce-back-end 
This is the back end for an e-commerce website built using Express.js API and Sequelize to interact with a MySQL database. 
The purpose of this project is to provide a functional and efficient back end system for an internet retail company, enabling them to compete with other e-commerce companies.

# Installation and Setup

1. Clone the starter code repository to your local machine.
2. Create your own repository with the cloned code. Note: Do not fork the starter code repository.
3. Install the required dependencies by running the following command:
```npm i```
4. Modify the environment variable file (.env) and provide the necessary configurations to establish a connection with your MySQL database.
```
DB_NAME: The name of your database
DB_USER: Your MySQL username
DB_PASSWORD: Your MySQL password
```
5. Set up the database, using MySQL shell commands: 
```mysql -u "userName" -p```
6. Use the schema.sql file located in the db folder to create your database.
```SOURCE schema.sql```
7. To populate the e-commerce database with the data, run the following command at package.json level:
```npm run seed```

# Usage
To run the application, execute the following command:
- `npm run watch nodemon` or `npm start` 
This will start the server and sync the Sequelize models with the MySQL database.

# Walkthrough Video

# API Routes
The application provides the following API routes:

## GET routes in Insomnia Core:
- /api/categories: Returns all categories in a formatted JSON.
- /api/products: Returns all products in a formatted JSON.
- /api/tags: Returns all tags in a formatted JSON.

## GET routes (by ID) in Insomnia Core:
- /api/categories/:id: Returns a single category by its ID in a formatted JSON.
- /api/products/:id: Returns a single product by its ID in a formatted JSON.
- /api/tags/:id: Returns a single tag by its ID in a formatted JSON.

## POST routes in Insomnia Core:
- /api/categories: Creates a new category.
- /api/products: Creates a new product.
- /api/tags: Creates a new tag.

## PUT routes in Insomnia Core:
- /api/categories/:id: Updates an existing category by its ID.
- /api/products/:id: Updates an existing product by its ID.
- /api/tags/:id: Updates an existing tag by its ID.

## DELETE routes in Insomnia Core:
- /api/categories/:id: Deletes an existing category by its ID.
- /api/products/:id: Deletes an existing product by its ID.
- /api/tags/:id: Deletes an existing tag by its ID.
