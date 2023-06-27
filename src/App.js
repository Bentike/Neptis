import './App.css';
import Logo from "./Components/Logo";
import Navs from './Components/Navs';
import Banner from './Components/Banner';

function App() {
  return (
    <div className="App">
      <header>
        <nav className='nav'>
           <Logo/>
           <Navs/>
        </nav>
        <main>
           <Banner/>
        </main>
      </header>
    </div>
  );
}

export default App;
