import PropTypes from "prop-types";

const FeatureCard = ({ feature }) => {
  const { icon, title, description } = feature;
  return (
    <div className="space-y-4">
      <img src={icon} alt="" className="w-20" />
      <h3 className="rancho text-4xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  feature: PropTypes.object,
};

export default FeatureCard;
