import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const PageHeader = ({ title, subtitle, btnText, center = false }) => {
  const location = useLocation();
  location.pathname === "/"
    ? ((title = "Our Products"),
      (subtitle =
        "Whatever your diet or preferences, there’s enough choice for everyone. Order your favourites ahead on our Coffee Club app."),
      (btnText = "Check Now"))
    : location.pathname === "/coffee-club"
    ? ((title = "Let the free times roll"),
      (subtitle = "Use our app for the best Coffee Club experience."),
      (btnText = "Join Coffee Club"),
      (center = true))
    : location.pathname === "/we-offer"
    ? ((title = "NS Coffee Delivery"),
      (subtitle =
        "Freshly brewed coffee, tasty meals and delicious snacks prepared in-store and delivered to you."),
      (btnText = "Order and Receive"))
    : location.pathname === "/menu"
    ? ((title = "Our Menu"),
      (subtitle =
        "Whatever your diet or preferences, there’s enough choice for everyone. Order your favourites ahead on our Coffee Club app."),
      (btnText = "Order Now"))
    : location.pathname === "/blogs"
    ? ((title = "Read Blogs to know health safty"),
      (subtitle =
        "Whatever your diet or preferences, there’s enough choice for everyone. Order your favourites ahead on our Coffee Club app."),
      (btnText = "Order Now"))
    : (title = "To know more contact us"),
    (subtitle =
      "Whatever your diet or preferences, there’s enough choice for everyone. Order your favourites ahead on our Coffee Club app."),
    (btnText = "Contact Now");
  return (
    <div
      className={`container mx-auto py-20 flex z-10 ${
        center && "justify-center text-center"
      }`}
    >
      <div className="space-y-4 max-w-screen-sm">
        <h1 className="text-4xl font-bold text-white"> {title} </h1>
        <h3 className="text-xl font-semibold text-white">{subtitle}</h3>
        <button className="btn btn-outline ">{btnText}</button>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  btnText: PropTypes.string,
  center: PropTypes.bool,
};

export default PageHeader;
