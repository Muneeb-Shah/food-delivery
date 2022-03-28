import PropTypes from "prop-types";
import { FaRegClock } from "react-icons/fa";

const RestaurantCard = (props) => {
  const { img, title, time, price, badgeImg, badgeTitle } = props;

  return (
    <div className="restaurant-card">
      <img
        src={`/assets/images/${img}`}
        alt={img}
        className="restaurant-card__img"
      />
      <div className="restaurant-card__content">
        <h6 className="content__heading">{title}</h6>
        <div className="content__time">
          <i className="clock-icon">
            <FaRegClock />
          </i>
          <p className="time__time">
            {time} min <span className="bold-dot">.</span>${price} min sum
          </p>
        </div>
        <div className="content__food-badge">
          <img
            src={`/assets/images/${badgeImg}`}
            alt={badgeImg}
            className="food-badge__img"
          />
          <p className="food-badge__title">{badgeTitle}</p>
        </div>
        <img
          className="content__cart-icon"
          src="/assets/images/shoppingBag.svg"
          alt="shopping cart icon"
        />
      </div>
    </div>
  );
};

RestaurantCard.defaultProps = {
  img: "royalSushiHouse.jpg",
  title: "Royal Sushi House",
  time: "30-40",
  price: 32,
  badgeImg: "sushi.svg",
  badgeTitle: "Sushi",
};

RestaurantCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  price: PropTypes.number,
  badgeImg: PropTypes.string,
  badgeTitle: PropTypes.string,
};

export default RestaurantCard;
