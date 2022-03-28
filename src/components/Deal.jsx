import PropTypes from "prop-types";

const Deal = ({ img, title, discount, label }) => {
  return (
    <div className="deal">
      <div className={`deal__content ${img.slice(0, -4)}`}>
        <img src={`/assets/images/${img}`} alt={img} className="content__img" />
        <div className="content__desc">
          <h5 className="desc__heading">{title}</h5>
          <h2 className={`desc__discount ${img.slice(0, -4)}__discount`}>
            {discount}% OFF
          </h2>
          <p className="desc__label">{label}</p>
        </div>
      </div>
    </div>
  );
};

Deal.defaultProps = {
  img: "cupcake.png",
  title: "All deserts",
  discount: 20,
  label: "Deserty",
};

Deal.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  discount: PropTypes.number,
  label: PropTypes.string,
};

export default Deal;
