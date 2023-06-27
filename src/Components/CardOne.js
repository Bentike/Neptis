import List from "./List";
import "../Styles/cardOne.css";

const CardOne = () => {
    return(
        <div className="price-card free-card">
           <p className="free">Free</p>
           <p className="price">0$</p>
           <button className="start">Get Started</button>
           <List/>
           <List/>
           <List/>
           <List/>
        </div>
    );
}

export default CardOne;