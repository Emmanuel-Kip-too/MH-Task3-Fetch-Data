

# Task 3: Simple React Application - Fetch and Display Users

## Project Overview

This project involves creating a simple React application that fetches and displays users from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API. The application will display each user's name and the number of posts they have made.

## Features

- Fetches user data from the JSONPlaceholder API.
- Displays each user's name.
- Shows the number of posts made by each user.
- Uses the Fetch API for making HTTP requests.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- Git (optional, for version control)

## Getting Started

Follow the steps below to set up and run the application locally.

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/MH-Task3-Fetch-Data.git
cd MH-Task3-Fetch-Data
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

### 3. Start the Application

Start the development server:

```bash
npm start
```

This command will open the application in your default web browser at `http://localhost:3000`.

## Project Structure

```
MH-Task3-Fetch-Data/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   └── UserList.js    # Component to display users and their post counts
│   │
│   ├── App.js             # Main application component
│   ├── index.js           # Entry point for React
│   └── App.css            # Styling for the application
│
├── package.json           # Project configuration and dependencies
└── README.md              # Project documentation
```

## Implementation Details

### Fetching Users and Posts

The application uses the Fetch API to make HTTP requests to the JSONPlaceholder API:

- **Users Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Posts Endpoint**: `https://jsonplaceholder.typicode.com/posts`

The data is then processed to display each user's name and the count of their posts.

### Example Code Snippet

Here's a basic outline of how the application fetches data and displays it:

```javascript
import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch users
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));

    // Fetch posts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const getPostCount = (userId) => {
    return posts.filter(post => post.userId === userId).length;
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {getPostCount(user.id)} posts
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

### Running Tests

If applicable, include any tests or instructions on how to run them.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing the fake online REST API for testing and prototyping.

---

This README provides an overview and setup instructions for your React application, ensuring that anyone can get started quickly. Let me know if there's anything you'd like to adjust!
