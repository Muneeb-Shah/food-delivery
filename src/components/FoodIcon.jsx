import { useState } from "react";
import PropTypes from "prop-types";

const FoodIcon = ({ img, label }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={clicked ? "food-icon__clicked" : "food-icon"}
      onClick={() => setClicked(!clicked)}
    >
      <img src={`/assets/images/${img}`} alt={img} className="food-icon__img" />
      <p className="food-icon__label">{label}</p>
    </div>
  );
};

FoodIcon.defaultProps = {
  img: "pizza.svg",
  label: "Pizza",
};

FoodIcon.propTypes = {
  img: PropTypes.string,
  label: PropTypes.string,
};

export default FoodIcon;
