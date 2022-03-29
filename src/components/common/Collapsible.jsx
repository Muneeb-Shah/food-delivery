import { useState } from "react";

const Collapsible = ({ links }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="collapsible container">
      <button className="menu-icon" onClick={() => setExpanded(!expanded)}>
        <img src="/assets/images/menu.png" alt="menu icon" />
      </button>
      <ul
        className={
          expanded ? "collapsible__list expanded" : "collapsible__list"
        }
      >
        {links.map((link) => (
          <li className="list__link">
            <a href="">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collapsible;
