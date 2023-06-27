import logo from "../images/logo.png";
import "../Styles/logo.css";

const Logo = () => {
    return(
        <div className="logo">
           <img src={logo} alt="company logo" className="neptis-logo"/>
           <h3>Neptis</h3>
        </div>
    );
}

export default Logo;