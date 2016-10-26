# Widget-App: A MEAN Stack Web Application for Ordering Widgets

Ian Taylor, October 2016.
Application Submission for University of Pennsylvania, Software Developer Position

This project is also hosted online at https://irtaylor-widgets.herokuapp.com/#/.

## Requirements
- [Node and NPM](http://nodejs.org)
- [Bower](https://bower.io/)
- [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community)

## Installation

1. Ensure that the above requirements are installed.
2. Clone the repository: `git clone https://github.com/irtaylor/Widget-App.git`.
3. Install the application: `npm install` and `bower install`.
4. Create a local directory for the database `./install_widgets.sh`. This will create the directory and run the Mongo Daemon in the background, facilitating database connections.   
5. Start the application: `npm start`
6. View in browser at `http://localhost:3000`
7. If running the application locally, the local database can be accessed through the MongoDB shell using the `mongo` command.

## Citations

- This application was created using the [Express Application Generator](https://expressjs.com/en/starter/generator.html).
- The general structure and development approach of this application was inspired by [Coursera's Six-Course Specialization on Full Stack Web Development](https://www.coursera.org/specializations/full-stack).
