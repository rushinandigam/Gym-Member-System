# Gym Membership Management System

## Overview
This is a full-stack CRUD application for managing gym memberships.  
It allows administrators to add, view, update, and delete member records with details such as name, email, phone, age, height, weight, and health conditions.

The system is built using:  
- Frontend: React + CSS
- Backend: Node.js + Express.js  
- Database: MongoDB 

## Features
- Add Members – Register new gym members with their personal details and profile pictures
- View Members – List all registered members with their basic information
- Member Details – View comprehensive information about each member
- Update Members – Modify existing member information including profile pictures
- Delete Members – Remove inactive members
- User-Friendly UI – Clean and intuitive interface

## Tech Stack
- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **File Upload**: Multer
- **IDE**: Visual Studio Code

## Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/rushinandigam/Gym-Member-System.git
cd Gym-Member-System
```

### 2. Backend Setup
```bash
cd backend
npm install
npm start
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Backend API Endpoints

### User Management
| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|-------------|----------|
| POST | `/registeruser` | Register a new user | Form data with name, mobile, age, height, weight, email, healthCondition, profile(image) | User object |
| GET | `/getallusers` | Get all registered users | None | Array of user objects |
| GET | `/getsingleuser/:id` | Get details of a specific user | None | User object |
| PUT | `/updateuser/:id` | Update user information | Form data with fields to update | Updated user object |
| DELETE | `/deleteuser/:id` | Delete a user | None | Success message |

### User Model Schema
```javascript
{
  name: String,           // Required
  mobile: String,         // Required, 10-digit validation
  age: Number,            // Required, 18-100
  height: Number,         // Required, in cm
  weight: Number,         // Required, in kg
  email: String,          // Required, unique, valid email format
  healthCondition: String, // Optional, default "None"
  profile: String,        // Optional, URL to profile image
  timestamps: true        // Automatically add createdAt and updatedAt
}
```

## Frontend Pages and Components

### 1. Home Page (`/`)
- Entry point of the application with hero section
- Navigation to other sections of the application

### 2. Register Page (`/register`)
- Form for adding new gym members
- Collects personal details, health information, and profile picture
- Redirects to success message upon completion

### 3. View All Customers Page (`/viewallcustomers`)
- Displays a grid of all registered gym members
- Each member card shows basic information and profile picture
- Clickable cards for detailed view

### 4. User Details Page (`/user`)
- Shows comprehensive information about a selected member
- Options to update or delete the member
- Displays profile picture prominently

### 5. Update User Page (`/updateuser`)
- Pre-filled form with existing user information
- Ability to update any field including profile picture
- Options to save changes or cancel

### 6. Message Page (`/message`)
- Displays success or error messages after operations
- Provides navigation back to relevant sections

## User Workflow
1. Admin navigates to the Register page to add a new gym member
2. Member details are submitted and stored in the database
3. Admin can view all members on the View All Customers page
4. Clicking on a member card shows detailed information
5. Admin can update member information or delete the member as needed

## File Structure
```
Gym-Member-System/
├── backend/
│   ├── index.js                # Main server file
│   ├── package.json            # Backend dependencies
│   └── src/
│       ├── config/             # Database configuration
│       ├── controllers/        # Request handlers
│       ├── middleware/         # Custom middleware (file upload, etc.)
│       ├── models/             # Database models
│       └── routes/             # API routes
├── frontend/
│   ├── package.json            # Frontend dependencies
│   ├── index.html              # HTML entry point
│   └── src/
│       ├── App.jsx             # Main component with routing
│       ├── components/         # React components
│       ├── cards/              # Card components for displaying users
│       └── assets/             # Images and other static assets
└── README.md                   # Project documentation
```

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

[Gym-Membership-Management-System.pptx](https://github.com/user-attachments/files/22107880/Gym-Membership-Management-System.pptx)


