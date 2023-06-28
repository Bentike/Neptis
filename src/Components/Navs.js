import "../Styles/navs.css";
import hambugger from "../images/hambugger.png";

const Navs = () => {
  return (
    <div>
      <ul className="nav-items">
        <li>Home</li>
        <li>Features</li>
        <li>How it works</li>
        <li>Pricing</li>
        <li>
          <button>Get Started</button>
        </li>
      </ul>

      <img src={hambugger} alt="open nav-links" className="hambugger" />

      <div className="nav-overlay">
        <ul className="overlay-list">
          <p className="close">X</p>
          <li>Home</li>
          <li>Features</li>
          <li>How it works</li>
          <li>Pricing</li>
        </ul>
      </div>
    </div>
  );
};

export default Navs;
