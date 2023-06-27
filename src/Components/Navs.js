import "../Styles/navs.css";

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
       </div>
    );
}

export default Navs;