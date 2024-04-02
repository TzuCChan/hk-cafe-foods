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

    return (
      <div id="mySidenav" class="sidenav" style={{ width: width }}>
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a
          class="tea"
          href="https://www.openrice.com/en/hongkong/r-hung-wan-cafe-mong-kok-hong-kong-style-r1391"
          onClick={Diner}
        >
          Hung Wan Cafe
        </a>
      </div>);
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
