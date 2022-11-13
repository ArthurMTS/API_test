# Simples User API

Simple API for study purposes

## How to install
- First get all the dependencies with: ```npm install```.
- Next install knex with: ```npm install knex --save```.
- Next install sqlite3 in your computer (depends on the OS).
- After that run: ```npx knex migrate:latest``` to execute the migrations.
- And finally you can run: ```npm run start:dev``` to execute the project.

## How to use
The API is running at [http://localhost:5000/users](http://localhost:5000/users).

It haves 5 routes, which you can see in src/routes.js file.