import './App.css';
import Header from './Header.js';
import Voter from './Voter/Voter.js';
import Inventory from './Inventory/Inventory.js';
import {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div className="App">
      <Header title="Pins App"></Header>
      <Voter></Voter>
      <Inventory></Inventory>
    </div>
  );
}

export default App;
