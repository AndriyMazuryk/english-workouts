import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../redux/actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="danger message" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <>
      <h3 className="page-title">Log In</h3>
      <Form onSubmit={handleLogin} ref={form} className="form">
        <div className="form__wrapper">
          {message && (
            <div className="form__group">
              <div className="danger message" role="alert">
                {message}
              </div>
            </div>
          )}

          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              className="form__input"
              onChange={(e) => setEmail(e.target.value)}
              validations={[required]}
            />
          </div>

          <div className="form__group">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              className="form__input"
              onChange={(e) => setPassword(e.target.value)}
              validations={[required]}
            />
          </div>

          <div className="form__group form__group--vertical">
            <button type="submit" disabled={loading} className="form__button">
              Sign in
            </button>
            <Link to="/register" className="form__link">
              Register
            </Link>
          </div>
        </div>
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </>
  );
};

export default Login;
