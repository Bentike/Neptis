import './App.css';
import Logo from "./Components/Logo";
import Navs from './Components/Navs';

function App() {
  return (
    <div className="App">
      <header>
        <nav className='nav'>
           <Logo/>
           <Navs/>
        </nav>
      </header>
    </div>
  );
}

export default App;
