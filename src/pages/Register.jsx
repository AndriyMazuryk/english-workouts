import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import classNames from "classnames";

import { register } from "../redux/actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="danger message" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="danger message" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="danger message" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="danger message" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (
      checkBtn.current.context._errors.length === 0 &&
      password === rePassword
    ) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <>
      <h3 class="page-title">Registration</h3>
      <Form onSubmit={handleRegister} ref={form} className="form">
        {!successful && (
          <div className="form__wrapper">
            {message && (
              <div
                className={classNames({
                  success: successful,
                  danger: !successful,
                  message: true,
                })}
              >
                Message: {message}
              </div>
            )}
            <div className="form__group">
              <label htmlFor="name" className="form__label">
                Name
              </label>
              <Input
                type="text"
                name="name"
                id="name"
                className="form__input"
                onChange={(e) => setUsername(e.target.value)}
                validations={[required, vusername]}
              />
            </div>

            <div className="form__group">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                className="form__input"
                onChange={(e) => setEmail(e.target.value)}
                validations={[required, validEmail]}
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
                className="form__input"
                onChange={(e) => setPassword(e.target.value)}
                validations={[required, vpassword]}
              />
            </div>

            <div className="form__group">
              <label htmlFor="re-password" className="form__label">
                Re-Password
              </label>
              <Input
                type="password"
                name="re-password"
                id="re-password"
                className="form__input"
                onChange={(e) => setRePassword(e.target.value)}
                validations={[required, vpassword]}
              />
            </div>

            <div className="form__group form__group--vertical">
              <button type="submit" className="form__button">
                Register
              </button>
              <Link to="/login" className="form__link">
                Login
              </Link>
            </div>
          </div>
        )}

        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </>
  );
};

export default Register;
