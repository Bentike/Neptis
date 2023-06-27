import List from "./List";
import "../Styles/lite.css";

const Lite = () => {
    return(
        <div className="price-card lite-card">
           <p className="free">Lite</p>
           <p className="price">$24</p>
           <button className="start lite-btn">Get Started</button>
           <List/>
           <List/>
           <List/>
           <List/>
           <List/>
           <List/>
        </div>
    );
}

export default Lite;