import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  
  return (
    <div className="App">
      {
        users.map((user, index) => {
          const {name, email, phone, website} = user;
          console.log(user);
          return <div key={index} className="user">
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: <a target="_blank" href={`http://${website}`}>{website}</a></p>
          </div> 
        })
      }
    </div>
  );
}

export default App;
