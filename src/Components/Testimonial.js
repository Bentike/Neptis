import "../Styles/testimonial.css";
import client from "../images/testimonial-image.png";
import arrowBack from "../images/arrow-back.png";
import arrowForward from "../images/arrow-forward.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h3>Testimonials</h3>
      <Carousel
        showIndicators={false}
        showArrows={true}
        autoPlay={true}
        interval="2000"
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
             className="back"
              onClick={clickHandler}
            >
              <img src={arrowBack} alt="slide back" className="back-arrow"/>
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
             className="forward"
              onClick={clickHandler}
            >
             <img src={arrowForward} alt="slide forward" className="forward-arrow"/>
            </div>
          );
        }}
      >
        <div>
          <div className="testimonial-text-wrap">
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur. Aliquet scelerisque sem
              commodo turpis ipsum. Et tristique arcu arcu sed feugiat tempus
              purus nullam gravida. Vitae gravida dui gravida amet vitae.
              Malesuada quisque accumsan quis cursus enim. Commodo in sit platea
              eget lobortis. Suspendisse nulla leo eget fringilla justo
              ultrices. Vestibulum sed mi donec maecenas sit nisi. Etiam
              tincidunt ultrices sit sit sociis rutrum dui. Fames nunc quam
              ullamcorper cursus. Diam vitae euismod curabitur ullamcorper.
            </p>

            <div className="testimonial-details">
              <img src={client} alt="client testimonial" className="text-img" />
              <div>
                <p className="name">Nicole Jaymer</p>
                <p className="role">Head of Noin Group</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="testimonial-text-wrap">
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur. Aliquet scelerisque sem
              commodo turpis ipsum. Et tristique arcu arcu sed feugiat tempus
              purus nullam gravida. Vitae gravida dui gravida amet vitae.
              Malesuada quisque accumsan quis cursus enim. Commodo in sit platea
              eget lobortis. Suspendisse nulla leo eget fringilla justo
              ultrices. Vestibulum sed mi donec maecenas sit nisi. Etiam
              tincidunt ultrices sit sit sociis rutrum dui. Fames nunc quam
              ullamcorper cursus. Diam vitae euismod curabitur ullamcorper.
            </p>

            <div className="testimonial-details">
              <img src={client} alt="client testimonial" className="text-img" />
              <div>
                <p className="name">Nicole Jaymer</p>
                <p className="role">Head of Noin Group</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="testimonial-text-wrap">
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur. Aliquet scelerisque sem
              commodo turpis ipsum. Et tristique arcu arcu sed feugiat tempus
              purus nullam gravida. Vitae gravida dui gravida amet vitae.
              Malesuada quisque accumsan quis cursus enim. Commodo in sit platea
              eget lobortis. Suspendisse nulla leo eget fringilla justo
              ultrices. Vestibulum sed mi donec maecenas sit nisi. Etiam
              tincidunt ultrices sit sit sociis rutrum dui. Fames nunc quam
              ullamcorper cursus. Diam vitae euismod curabitur ullamcorper.
            </p>

            <div className="testimonial-details">
              <img src={client} alt="client testimonial" className="text-img" />
              <div>
                <p className="name">Nicole Jaymer</p>
                <p className="role">Head of Noin Group</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      {/* <div className="controls">
        <img src={arrowBack} alt="slide back"/>
        <img src={arrowForward} alt="slide forward" className="forward" />
      </div> */}
    </div>
  );
};

export default Testimonial;
