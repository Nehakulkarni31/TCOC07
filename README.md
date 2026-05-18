# Campus Notifications Microservice

## Features

- Protected API Authentication
- Priority Notification System
- Logging Middleware
- React Dashboard
- Filtering Notifications
- Responsive UI

## Tech Stack

### Backend
- Node.js
- Express.js
- Axios

### Frontend
- React.js
- Material UI
- Axios

## Run Backend

cd backend
npm install
node server.js

## Run Frontend

cd frontend
npm install
npm run dev

## API Endpoint

GET /notifications

## Priority Logic

Placement > Result > Event

More recent notifications are prioritized within the same category.