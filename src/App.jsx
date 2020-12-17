import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Home, IrregularVerbs, Register, Login } from "./pages";
import { Header, Navbar, Main, Footer } from "./components";

import { clearMessage } from "./redux/actions/message";

export default function App() {
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    dispatch(clearMessage());
  }, [location.pathname]);

  return (
    <div className="wrapper">
      <Header />
      <Navbar />

      <Main>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/irregular-verbs" component={IrregularVerbs} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Main>

      <Footer />
    </div>
  );
}
