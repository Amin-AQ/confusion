import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap'
import './components/MenuComponent';
import './App.css';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href='/'> Cat </NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;











/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */