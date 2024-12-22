import PropTypes from "prop-types";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center space-y-3">
      <h4 className="text-xl font-semibold text-[#1B1A1A]">{subTitle}</h4>
      <h2 className="rancho text-5xl font-bold text-[#331A15] text-shadow">
        {title}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default SectionTitle;
