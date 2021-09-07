

# <p align="center">Welcome to my E-Commerce Back End Database!</p> 
## <p align="center">A command line application for managing a store database with a RESTful API.</p>

## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Challenges](#challenges)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)

## Description

This application allows the user to manage the database of an e-commerce store. Users can keep track of stock, update items in the db, remove items, and add new items. This is all done from the command line using Node.js, Express, MySQL, and Sequelize.  
 
## Technologies
* JavaScript
* Node.js
* SQL
* Express
* dotenv
* Sequelize
* MySQL2 npm package



## Functionality
The application uses Express, Node.js, MySQL, and Segeulize to enable users to manage an e-commerce database from the command line. Once the app is installed, the user can connect to the database and manage the items in the online store by running "mysql -u root -p" and entering their password. Users will then need to create the database by running "sourece db/schema.sql" in the command line. Users will need to create a new .env file to create and store environment variables. Once connected to SQL, users can run "npm run seed" to seed the database and then "npm start" to connect to the api. Using Insomnia to test, users can easily keep track of the items in the store and can also use the application to create, read, update, or delete items. The application uses routes to create a RESTful API that users can interact with from the command line.  


## Demo
#### This demo shows the GET routes running in Insomnia:

https://user-images.githubusercontent.com/82903201/132392707-85dba6fa-e898-491d-a816-bb899fc9a727.mp4


#### This demo shows the GET by Id routes running in Insomnia:

https://user-images.githubusercontent.com/82903201/132392719-6e2901a7-5dd2-4828-8aef-1ce6c972464f.mp4


#### This demo shows the POST, PUT, and DELETE routes running in Insomnia:

https://user-images.githubusercontent.com/82903201/132392725-8ecb21b6-43d2-475c-83f6-1fc694d79352.mp4


## Challenges

* Testing routes in Insomnia and double checking code when errors popped up. 
* Understanding the hasMany relationship.
* There are a lot if files to keep track of. 

## Usage
* Use this app to keep track of an e-commerce shop.
* Use this app to understand object relational mapping.
* Use this app to see how Node.js and SQL work together. 

## Installation
* npm install
* mysql -u root -password
* source db/schema.sql
* exit
* npm run seed 
* npm run start

## Future Development
* Make the application more robust and test it in a real-world environment.
* Update older projects to include an api. 

## Questions
* Take a look at my GitHub profile to see other projects: 
[My GitHub Profile](https://github.com/BeardoMattix)
* If you have any questions, please reach out via email: christopher.mattix@gmail.com

## License
[MIT](https://opensource.org/licenses/MIT)

![badge](https://img.shields.io/static/v1?label=License&message=MIT&color=success)