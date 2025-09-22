#WanderLust
Wanderlust is a web application inspired by Airbnb that enables users to explore, book, and review various accommodations around the globe. Built using the MERN stack (excluding React), it focuses on providing an intuitive and functional user experience.

Features
Browse Listings: Explore a variety of accommodation options with detailed descriptions, images, and pricing.
User Authentication: Secure login and registration system for users.
Create Listings: Host users can add new property listings.
Reviews and Ratings: Users can leave reviews and ratings for their stays.
Responsive Design: Fully responsive UI built with HTML, CSS, and Bootstrap.
Tech Stack
Frontend:

HTML, CSS, Bootstrap
EJS (Embedded JavaScript Templates)
JavaScript
Backend:

Node.js
Express.js
Database:

MongoDB
Project Structure
wanderlust/
├── init/            # Initialization scripts for seeding data
│   ├── data.js      # Data seeding script
│   └── index.js     # Script entry point for initialization
├── models/          # Mongoose models for database schemas
│   ├── listing.js   # Listing schema
│   └── review.js    # Review schema
├── node_modules/    # Node.js dependencies
├── public/          # Static files (CSS, JS, images)
│   ├── css/         # Stylesheets
│   │   └── style.css
│   ├── js/          # Client-side scripts
│   │   └── script.js
├── utils/           # Utility functions and error handling
│   ├── ExpressErrors.js
│   └── wrapAsync.js
├── views/           # EJS templates
│   ├── layouts/     # Layout templates
│   │   └── boilerplate.ejs
│   ├── includes/    # Reusable components
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   ├── listings/    # Listing-specific templates
│       ├── edit.ejs
│       ├── index.ejs
│       ├── new.ejs
│       └── show.ejs
├── app.js           # Main application file with routes
├── schema.js        # MongoDB schemas
├── package.json     # Project metadata and dependencies
├── .env             # Environment variables
└── README.md        # Project documentation
Installation and Setup
Follow these steps to set up and run Wanderlust on your local machine:

Prerequisites
Node.js: Install Node.js.
MongoDB: Install and run MongoDB on your system or use a cloud service like MongoDB Atlas.
Step-by-Step Guide
Clone the Repository:

git clone https://github.com/yourusername/wanderlust.git
Navigate to the Project Directory:

cd wanderlust
Install Dependencies: Since the node_modules folder is already included, this step is optional. However, if needed, run:

npm install
Install Required Packages (if missing):

Install nodemon for development:
npm install -g nodemon
Install specific dependencies:
npm install express ejs mongoose dotenv method-override
Set Up Environment Variables:

Create a .env file in the root directory.
Add the following variables:
DATABASE_URL=your_mongodb_connection_string
PORT=3000
SECRET=your_secret_key
Initialize the Database (Optional): If required, populate the database with initial data:

node init/index.js
Start the Server:

For development (with nodemon):
nodemon app.js
Without nodemon:
node app.js
Access the Application: Open your browser and navigate to:

http://localhost:3000
Running the Application
Ensure MongoDB is running locally or accessible via the connection string.
Use the routes in app.js to manage listings and reviews.
Customize the public/css/style.css and views for design changes.
Contributing
Contributions are welcome! This project is actively under development, and new features and improvements are being added. Everyone is welcome to contribute and help enhance Wanderlust! If you’d like to contribute, please follow these steps:

Fork the repository.
Create a new branch:
git checkout -b feature-name
Make your changes and commit them:
git commit -m "Add feature-name"
Push to the branch:
git push origin feature-name
Open a pull request on GitHub.
License
This project is licensed under the MIT License.

Acknowledgments
Inspired by Airbnb's functionality and design principles.
Built with passion and dedication to learning and improving web development skills.
Feel free to explore and use Wanderlust. If you have any questions or suggestions, feel free to reach out!
