import Link from "react-router-dom/Link";

const Logo = () => {
  return (
    <Link to="/home">
      <img
        className="main-logo"
        src="/assets/images/logo.svg"
        alt="food delivery"
      />
    </Link>
  );
};

export default Logo;
