import Logo from "../Components/Logo"
import "../Styles/footer.css";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import fb from "../images/facebook.png";

const Footer = () => {
    return(
        <div className="footer-wrap">
           <Logo/>
           <div className="footer-links">
             <p>Home</p>
             <p>Features</p>
             <p>How it works</p>
             <p>Pricing</p>
           </div>
           <div className="socials">
              <img src={twitter} alt="link to twitter"/>
              <img src={linkedin} alt="link to linkedin"/>
              <img src={fb} alt="link to facebook"/>
           </div>
        </div>
    );
}

export default Footer;