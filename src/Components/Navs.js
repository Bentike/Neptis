import { useState } from "react";
import "../Styles/navs.css";
import hambugger from "../images/hambugger.png";

const Navs = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
     setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

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

      <img src={hambugger} alt="open nav-links" className="hambugger" onClick={openModal}/>

      <div className="nav-overlay" style={{display: modal ? "block" : "none"}}>
        <ul className="overlay-list">
          <p className="close" onClick={closeModal}>X</p>
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
