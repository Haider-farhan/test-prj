import React from 'react';
import axios from 'axios';

function App() {

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // const name = event.target.elements.name.value;
      // const password = event.target.elements.password.value;

      const response = await axios.post('http://localhost:5000/api/users/register', event.target);
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }

export default App;