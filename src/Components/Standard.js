import List from "./List";
import "../Styles/standard.css";

const Standard = () => {
  return (
    <div className="price-card standard-card">
      <p className="free">Standard</p>
      <p className="price">$40</p>
      <button className="start standard-btn">Get Started</button>
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Standard;
