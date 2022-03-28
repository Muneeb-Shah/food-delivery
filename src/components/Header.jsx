import Logo from "./common/Logo";
import Input from "./common/Input";
import Navbar from "./Navbar";
import Collapsible from "./common/Collapsible";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container header__content">
          <div className="header__left">
            <Logo />
            <Input
              type="text"
              id="search-input"
              label=""
              placeholder="Search"
            />
          </div>
          <div className="header__right">
            <Navbar />
          </div>
        </div>
      </header>
      <Collapsible links={["Restaurants", "Deals", "My order"]} />
    </Fragment>
  );
};

export default Header;
