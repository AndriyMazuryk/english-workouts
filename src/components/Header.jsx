import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../redux/actions/auth";

const Header = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <Link className="header__link" to="/">
              English Workouts
            </Link>
          </div>
          {currentUser ? (
            <div className="header__account">
              <Link to="/profile">{currentUser.username}</Link>
              <Link to="/login" onClick={logOut}>
                LogOut
              </Link>
            </div>
          ) : (
            <div className="header__account">
              <Link to="/register" className="header__link">Register</Link>
              <Link to="/login" className="header__link">Login</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
