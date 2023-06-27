import "../Styles/Banner.css";
import banner from "../images/banner.png";

const Banner = () => {
    return(
        <div className="banner-wrap">
            <div className="banner-text">
               <h1>Transform Your Images into <br/> Stunning Websites with Neptis</h1>
               <p>"Harness the power of AI to turn your website designs into reality</p>
               <button>Get Started</button>
            </div>
            <div className="banner-img-wrap">
                <img src={banner} alt="Banner" className="banner-img"/>
            </div>
        </div>
    );
}

export default Banner;