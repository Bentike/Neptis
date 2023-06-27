import './App.css';
import Logo from "./Components/Logo";
import Navs from './Components/Navs';
import Banner from './Components/Banner';
import Features from './Components/Features';
import HowItWorks from './Components/HowItWorks';
import Testimonial from './Components/Testimonial';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <nav className='nav'>
           <Logo/>
           <Navs/>
        </nav>
           <Banner/>
      </header>
        <Features/>
        <HowItWorks/>
        <Testimonial/>
        <Pricing/>
        <Footer/>
    </div>
  );
}

export default App;
