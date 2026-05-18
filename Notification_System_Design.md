# Stage 1 - Campus Notifications Microservice

## Approach

The application fetches notifications from the protected AffordMed Notifications API.

Notifications are prioritized using:

- Notification Type Weight
- Recency (latest notifications first)

Priority Order:

Placement > Result > Event

The top 10 notifications are returned through the backend API.

---

## Priority Logic

Weights Used:

- Placement = 3
- Result = 2
- Event = 1

Priority Formula:

priority = typeWeight * largeConstant + timestamp

This ensures:
- Placement notifications always rank higher
- More recent notifications appear first within same type

---

## Efficient Top 10 Handling

Currently:
- Notifications are sorted in-memory

Optimized Approach:
- Use Min Heap / Priority Queue
- Complexity:
  O(log k)

where:
- k = 10

This improves efficiency for real-time streaming notifications.

---

## Logging Middleware

Implemented reusable centralized logging middleware.

Features:
- Sends logs to protected AffordMed Log API
- Captures:
  - info logs
  - error logs
  - route activity
  - service activity

---

## Tech Stack

- Node.js
- Express.js
- Axios

---

## Future Improvements

- Redis caching
- Kafka event streaming
- WebSocket real-time notifications
- Database persistence
- Microservice deployment