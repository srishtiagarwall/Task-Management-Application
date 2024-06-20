# Task-Management-Application

![Task Management Application Preview](https://drive.google.com/uc?id=1t2fu-fsomu3A5afkzaiLkIUU2tkG1vdv)

Task Management Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can perform basic CRUD operations (Create, Read, Update, Delete) for managing their tasks with deadlines.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js

## Requirements

- Node.js installed on your machine.
- MongoDB installed locally or MongoDB Atlas account.

## Project Structure

Task Management Application/
├── backend/
│   ├── node_modules/
│   ├── server.js
│   ├── models/
|   |   ├── taskManagement.js
|   ├── package-lock.json
│   └── package.json
├── frontend/
│   ├── node_modules/
│   ├── public/
|   |   ├── index.html
│   ├── src/
│   │   ├── components/
|   |   |   ├── tasks.css
|   |   |   ├── tasks.js
│   │   ├── App.js
│   │   └── index.js
|   ├── package-lock.json
│   └── package.json
└── README.md

## Backend Setup

1. Navigate to the `backend` directory.
   ```bash
   cd backend

2. Install dependencies.
   ```bash
   npm install

4. Start the backend server.
     ```bash
     npm start

## Frontend Setup

1. Navigate to the frontend directory.
      ```bash
      cd frontend

3. Install dependencies.
      ```bash
      npm install

5. Start the React development server.
      ```bash
      npm start

## Database Configuration

Ensure your MongoDB database is running. Update the MongoDB connection URL in `server.js` if necessary.


## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Add new tasks with deadlines, edit existing tasks, and delete tasks as needed.


## API Endpoints

- `GET /getTasksList`: Fetch all tasks from the database.
- `POST /addTasksList`: Add a new task to the database.
- `POST /updateTasksList/:id`: Update an existing task by ID.
- `DELETE /deleteTasksList/:id`: Delete a task by ID.

## Author

Srishti Agarwal
