import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [width, setWidth] = useState('0%');

  function Food() {
    const openNav = () => {
      setWidth('20%');
    };
    return (
      <div id="icon" onClick={openNav}>
        ☕Menu☕
      </div>
    );
  }

  function Diner() {
    return <div class="container"></div>;
  }

  function Menu() {
    const closeNav = () => {
      setWidth('0px');
    };
  }

  return (
    <div className="App">
      <Food />
      <Diner />
      <Menu />
    </div>
  );
}

export default App;
