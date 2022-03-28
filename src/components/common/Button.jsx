import PropTypes from "prop-types";

const Button = ({ type, label, className }) => {
  return (
    <button className={className} type={type}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  type: "",
  label: "Click",
  className: "btn",
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
