import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'
//import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
        <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        <div>Aluno: MarillyaK</div>
        </div>
        </Navbar>
    </div>
  );
}

export default App;

<Menu />