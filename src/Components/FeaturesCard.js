import "../Styles/featuresCard.css";

const FeaturesCard = ({title, text}) => {
   return(
      <div className="feature-card">
         <h4>{title}</h4>
         <p>{text}</p>
      </div>
   );
}

export default FeaturesCard;