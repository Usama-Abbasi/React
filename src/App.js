import React from 'react';
import logo from './logo.svg';
import { Navbar,NavbarBrand} from 'reactstrap';
import Menu from './component/MenuComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color ="primary">
        <div className="conatainer">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
