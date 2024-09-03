import React, { useEffect, useState } from 'react';

function App() {
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

  // Function to count posts per user
  const countUserPosts = (userId) => {
    return posts.filter(post => post.userId === userId).length;
  };

  return (
    <div className="App">
      <h1>Users and Post Count</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - Posts: {countUserPosts(user.id)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
