# EventManager Backend

## Description
EventManagener Backend is the server-side application for the Eventify web application. It handles user authentication, event management, and integrates with external APIs for weather data. The backend is built using Express.js and integrates with a Mongodb database for persistent storage.

## Features
- **User Authentication:** Register and log in users with JWT-based authentication.
- **Event Management:** CRUD operations for managing events.
- **Weather Integration:** Fetch weather data based on event location using an external weather API.
- **Session Management:** Secure session management for authenticated users.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/notes-app-backend.git
    cd notes-app-backend
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```
    MONGODB_URI=mongodb://localhost:27017/note-taking-app
    JWT_SECRET=your_jwt_secret
    PORT=3000
    ```

4. Start the server:

    ```sh
    npm start
    ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Events

- `POST api/auth/register` - Register a new user
- `POST /api/auth/login` - Get all notes for the authenticated user
- `GET /api/auth/me` - Get details of the currently authenticated user.
- `GET /api/events`- Retrieve all events.
- `POST /api/events` - Create a new event.
- `PUT /api/events/` - Update an existing event.
- `DELETE /api/events/` - Delete an event.
- `GET /api/events/weather` - Get weather data for a specific location and date.

## Project Structure

src/
│
├── controllers/
│
├── middleware/
│
├── models/
│
├── routes/
│
├── app.js
├── server.js
│
└── .env



### User Routes

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user

## Controllers

### Events Controller

- `addEvent` - Create a new event
- `getEvents` - Get all notes for a user
- `updateEvent` - Update a Event
- `deleteNote` - Move a note to trash
- `getMe` - Get all details of a user


### User Controller

- `registerUser` - Register a new user
- `loginUser` - Login a user

## License

This project is licensed under the MIT License.


