import check from "../images/check.png"

const CardOne = () => {
    return(
        <div>
           <p>Free</p>
           <p>0$</p>
           <button>Get Started</button>
           <div>
              <img src={check} className="check"/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
           </div>
        </div>
    );
}

export default CardOne;