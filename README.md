# EventManager

EventManger is a web application designed to manage events and provide weather information based on the event location. The application consists of a backend built with Express.js and Mongodb, and a frontend built with React.

## Features
- **User Authentication:** Register and log in users with JWT-based authentication.
- **Event Management:** CRUD operations for managing events.
- **Weather Integration:** Fetch weather data based on event location using an external weather API.
- **Session Management:** Secure session management for authenticated users.

## Project URL
You can access the project at: [EventManager URL](https://66adf47e43ec4d4f7df6f5b1--flourishing-mandazi-57b93f.netlify.app/)

## Sample Credentials
Use the following credentials to log in to the application:

- **Email:** ajay@gmail.com
- **Password:** password123


## Project Setup

### Prerequisites
- Node.js (v14 or later)
- Mongodb

### 1. Initialize a Node.js Project
Create a new folder for your project and initialize it with `npm init` to create a `package.json` file.

### 2. Install Dependencies
Install React for the front end using Create React App and the necessary dependencies for the backend.

```bash
npx create-react-app client
npm install express mongodb mongoose
```

### 3. Database Setup
Setup MongoDB to handle data for users, events, and sessions. You'll need to create collections for each of these entities. Utilize mongoose in Node.js to manage database operations.

## Backend Development
### Express Setup
Set up an Express server that will handle API requests.

### API Routes
User Authentication: Register, Login
CRUD operations for events
Session management
Database Integration
Implement functions to interact with MongoDB for CRUD operations using Mongoose.

External API Integration
Use a weather API (like OpenWeatherMap API) to fetch weather data. Implement a route to query weather information based on the event location.

### Installation
Clone the repository:

```bash
Copy code
git clone https://github.com/yourusername/eventmanager.git
```
Navigate to the project directory:

```bash
Copy code
cd eventmanager
```
Navigate to the backend directory:

```bash
Copy code
cd backend
```
Install backend dependencies:

```bash
Copy code
npm install
```
Create a .env file in the root directory and add the following environment variables:

``plaintext
Copy code
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_uri``
Start the backend server:

```bash
Copy code
npm start
```
### API Endpoints
 - `POST /api/auth/register` - Register a new user.
 - `POST /api/auth/login` - Log in an existing user and get a JWT token.
 - `GET /api/auth/me`- Get details of the currently authenticated user.
 - `GET /api/events`- Retrieve all events.
 - `POST /api/events` - Create a new event.
 - `PUT /api/events/:id` - Update an existing event.
 - `DELETE /api/events/:id` - Delete an event.
 - `GET /api/events/weather` - Get weather data for a specific location and date.

## Frontend Development
### React Components
Create components for user registration, login, event management (add, edit, delete, and view events), and display weather.

### State Management
Manage application state using React Hooks like useState and useEffect for fetching data from the backend.

### Routing
Use React Router for navigating between different components/pages.

### Installation
Navigate to the frontend directory:

```bash
Copy code
cd ../client
```
Install frontend dependencies:

```bash
Copy code
npm install
```
Start the frontend development server:

```bash
Copy code
npm start
```
### Contributing
Feel free to open issues or submit pull requests. For major changes, please open an issue first to discuss what you would like to change.



This README file provides a comprehensive guide to setting up, developing, and contributing 
