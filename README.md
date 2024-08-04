# EventManager

EventManger is a web application designed to manage events and provide weather information based on the event location. The application consists of a backend built with Express.js and Mongodb, and a frontend built with React.

## Features
- **User Authentication:** Register and log in users with JWT-based authentication.
- **Event Management:** CRUD operations for managing events.
- **Weather Integration:** Fetch weather data based on event location using an external weather API.
- **Session Management:** Secure session management for authenticated users.

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
npm install express mongoose
