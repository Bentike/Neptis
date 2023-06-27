import './App.css';
import Logo from "./Components/Logo";
import Navs from './Components/Navs';
import Banner from './Components/Banner';
import Features from './Components/Features';
import HowItWorks from './Components/HowItWorks';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <nav className='nav'>
           <Logo/>
           <Navs/>
        </nav>
        <main>
           <Banner/>
        </main>
      </header>
      <section>
        <Features/>
      </section>
      <section>
        <HowItWorks/>
      </section>
    </div>
  );
}

export default App;
