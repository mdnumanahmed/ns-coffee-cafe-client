import FeatureCard from "./FeatureCard";
import image1 from "../../assets/features/coffee-cup.png";
import image2 from "../../assets/features/quality.png";
import image3 from "../../assets/features/coffee-beans.png";
import image4 from "../../assets/features/cup.png";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: image1,
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      id: 2,
      icon: image2,
      title: "High Quality",
      description: "We served the coffee to you maintaining the best quality",
    },
    {
      id: 3,
      icon: image3,
      title: "Pure Grades",
      description:
        "The coffee is made of the green coffee beans which you will love",
    },
    {
      id: 4,
      icon: image4,
      title: "Proper Roasting",
      description:
        "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];
  return (
    <div className="bg-[#ECEAE3]">
      <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
