import { Fragment, useState } from "react";
import Collapsible from "./common/Collapsible";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <nav class="main-nav">
        <ul className={isOpen ? "main-nav__links expanded" : "main-nav__links"}>
          <li>
            <a href="">Restaurants</a>
          </li>
          <li>
            <a href="">Deals</a>
          </li>
          <li>
            <a href="">My orders</a>
          </li>
        </ul>
        <div className="main-nav__user">
          <a href="">
            <img
              className="user__cart"
              src="/assets/images/cart.png"
              alt="cart"
            />
          </a>
          <a href="">
            <img
              className="user__profile"
              src="/assets/images/profile.png"
              alt="profile"
            />
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
