# ITS Final Exam

Final exam for my Full Stack Web Developer course (2023-2025). The `snapshot-exam` branch contains the exact code that was submitted for the exam.

## What?

Web app where employees can create purchase requests and administrators can approve or reject them.

## How?

The backend is written in TypeScript with Node.js, Express and MongoDB as database. The frontend is also written in TypeScript, with Node.js and Angular.

Tested with Node 22 LTS and MongoDB 8.0 + Atlas.

## How to run this

Make sure you have [Git](https://git-scm.com), [MongoDB](https://www.mongodb.com/try/download/community) (not needed if you use [Atlas](https://www.mongodb.com/atlas)), [Node.js](https://nodejs.org/en) and the [Angular CLI](https://angular.dev/tools/cli/setup-local) installed.

```
git clone https://github.com/LeddaZ/its-final-exam
cd its-final-exam
```

### Backend

```
cd backend
# Copy .env.example to .env and fill in the required fields
npm i
npm run dev
```

### Frontend

```
cd frontend
npm i
ng serve --open # Opens a new browser tab, or
ng serve # Launches the frontend without opening it
```
