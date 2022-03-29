import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

const Input = ({ type, placeholder, id, label }) => {
  if (type === "password") {
    return (
      <div className="form-group form-group__password">
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
        <input
          className="form-input"
          id={id}
          type={type}
          placeholder={placeholder}
        />
        <span className="show-password">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.833374 8C0.833374 8 4.16671 1.33333 10 1.33333C15.8334 1.33333 19.1667 8 19.1667 8C19.1667 8 15.8334 14.6667 10 14.6667C4.16671 14.6667 0.833374 8 0.833374 8Z"
              stroke="#C7C8D2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    );
  }

  if (id === "search-input") {
    return (
      <div className="form-group form-group__password">
        {label && (
          <label className="form-label" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          className="form-input"
          id={id}
          type={type}
          placeholder={placeholder}
        />
        <span className="show-password">
          <FaSearch />
        </span>
      </div>
    );
  }

  return (
    <div
      className={
        type === "checkbox" ? "form-group form-group__checkbox" : "form-group"
      }
    >
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-input"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  label: "input",
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
