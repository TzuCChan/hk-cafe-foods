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
        ☕Locations☕
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
        <a class="tea" href="https://www.openrice.com/en/hongkong/r-australia-dairy-company-jordan-hong-kong-style-dessert-r90" onClick={Diner}>
          Australia Dairy Company
        </a>
        <a class="tea" href="https://www.openrice.com/en/hongkong/r-kam-wah-cafe-prince-edward-hong-kong-style-r11293" onClick={Diner}>
          Kam Wah Café & Bakery
        </a>
        <a class="tea" href="https://www.hklanfongyuen.com/en/" onClick={Diner}>
          Lan Fong Yuen
        </a>
        <a class="tea" href="http://www.tsuiwah.com/en/business/restaurant/company_introduction/" onClick={Diner}>
          Tsui Wah Restaurant Group
        </a>
        <a class="tea" href="https://nganlung.com" onClick={Diner}>
          Ngan Lung Restaurant Limited
        </a>
        <a class="tea" href="https://www.dachan.com/brand/a80YPFdGudhXdXnC" onClick={Diner}>
          Honolulu Coffee Shop
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
