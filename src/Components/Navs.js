import "../Styles/navs.css";
import hambugger from "../images/hambugger.png";

const Navs = () => {
    return(
       <div>
           <ul className="nav-items">
              <li>Home</li>
              <li>Features</li>
              <li>How it works</li>
              <li>Pricing</li>
              <li><button>Get Started</button></li>
           </ul>
           <img src={hambugger} alt="open nav-links" className="hambugger"/>
       </div>
    );
}

export default Navs;