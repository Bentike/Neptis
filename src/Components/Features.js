import FeaturesCard from "./FeaturesCard";
import "../Styles/features.css";
const Features = () => {
  return (
    <div className="features-wrap">
        <h2>Amazing Features for You</h2>
      <div className="card-wrap">
        <FeaturesCard
          title="AI-Powered Website Generation"
          text="Create stunning and functional websites effortlessly with our AI-powered website generation feature, which seamlessly transforms web designs into fully operational sites."
        />
        <FeaturesCard
          title="Customizable Design Elements"
          text="Customize every aspect of your website with ease using our wide range of design elements, ensuring a unique and personalized online presence."
        />
        <FeaturesCard
          title="User-Friendly Interface"
          text="Creating a website has never been easier. Our user-friendly interface ensures a seamless and intuitive website building experience."
        />
        <FeaturesCard
          title="Responsive Website Outputs"
          text="Our platform automatically adapts your website's design and layout to different screen sizes, providing optimal viewing experiences on desktops, laptops, tablets, and smartphones."
        />
      </div>
    </div>
  );
};

export default Features;
