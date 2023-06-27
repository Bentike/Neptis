import './App.css';
import Logo from "./Components/Logo";
import Navs from './Components/Navs';
import Banner from './Components/Banner';
import Features from './Components/Features';
import HowItWorks from './Components/HowItWorks';
import Testimonial from './Components/Testimonial';
import Pricing from './Components/Pricing';

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
        <Features/>
        <HowItWorks/>
        <Testimonial/>
        <Pricing/>
    </div>
  );
}

export default App;
