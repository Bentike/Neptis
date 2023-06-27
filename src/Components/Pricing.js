import "../Styles/pricing.css";
import CardOne from "./CardOne";
import Lite from "./Lite";
import Standard from "./Standard";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-header">
        <h2>Pricing and Plans</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Aliquet  <br/> scelerisque sem
          commodo turpis ipsum.
        </p>
      </div>
      <div className="card-price-wrap">
        <CardOne />
        <Lite />
        <Standard />
      </div>
    </div>
  );
};

export default Pricing;
