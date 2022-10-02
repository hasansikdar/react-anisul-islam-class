import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card1 from './Components/Card/Card1';
import Card2 from './Components/Card/Card2';
import ClassComponent from './Components/Card/ClassComponent';
import Card3 from './Components/Card/Card3';
import Card4 from './Components/Card/Card4';
import Card5 from './Components/Card/Card5';
import Card6 from './Components/Card/Card6';
function App() {
  
  return (
    <div className="App">
        <Card1></Card1>
        <Card2></Card2>
        <ClassComponent></ClassComponent>
        <Card3></Card3>
        <Card4></Card4>
        <Card5></Card5>
        <Card6></Card6>
    </div>
  );
}

export default App;
