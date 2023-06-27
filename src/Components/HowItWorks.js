import "../Styles/howItWork.css";
import line from "../images/line.png";
import robot from "../images/robot.png";

const HowItWorks = () => {
    return(
        <div className="work-wrap">
            <div className="design-left">
                <div>
                    <img src={line} alt="designed line" className="line"/>
                </div>
                <div>
                   <div className="works-div">
                       <h4>AI-Powered Website Generation</h4>
                       <p>Create stunning and functional websites effortlessly with our AI-powered website generation feature, which seamlessly transforms web designs into fully operational sites.</p>
                   </div>
                   <div className="works-div">
                       <h4>Customizable Design Elements</h4>
                       <p>Customize every aspect of your website with ease using our wide range of design elements, ensuring a unique and personalized online presence.</p>
                   </div>
                   <div className="works-div">
                       <h4>User-Friendly Interface</h4>
                       <p>Creating a website has never been easier. Our user-friendly interface ensures a seamless and intuitive website building experience.</p>
                   </div>
                </div>
            </div>
            <div>
                <img src={robot} alt="robotics" className="robot-img"/>
            </div>
        </div>
    );
}

export default HowItWorks;