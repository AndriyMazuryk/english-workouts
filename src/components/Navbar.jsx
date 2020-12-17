import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Irregular Verbs", link: "/irregular-verbs" },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__menu">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={classNames({
                navbar__item: true,
                "navbar__item--active": item.link === location.pathname,
              })}
            >
              <Link className="navbar__link" to={item.link}>
                <div>{item.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
