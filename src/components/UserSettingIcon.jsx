import { useState } from "react";
import PropTypes from "prop-types";

const UserSettingIcon = ({ img, title, desc }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={
        active
          ? "user-setting-icon user-setting-icon__active"
          : "user-setting-icon"
      }
      onClick={() => setActive(!active)}
    >
      <div
        className={
          active
            ? "user-setting-icon__icon user-setting-icon__icon__active"
            : "user-setting-icon__icon"
        }
      >
        <img
          className="user-setting-icon__icon__img"
          src={`/assets/images/${img}`}
          alt=""
        />
      </div>
      <div className="user-setting-icon__content">
        <p className="user-setting-icon__content__title">{title}</p>
        <p className="user-setting-icon__content__desc">{desc}</p>
      </div>
    </div>
  );
};

UserSettingIcon.defaultProps = {
  img: "user.svg",
  title: "Account",
  desc: "Personal Information",
};

UserSettingIcon.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default UserSettingIcon;
