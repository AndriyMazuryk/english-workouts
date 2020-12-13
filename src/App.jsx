import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Home, IrregularVerbs, Register, Login } from "./pages";
import { Header, Navbar, Footer } from "./components";

import { clearMessage } from "./redux/actions/message";

import { history } from "./helpers/history";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage());
    });
  }, [dispatch]);

  return (
    <Router history={history}>
      <div className="wrapper">
        <Header />
        <Navbar />

        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/irregular-verbs" component={IrregularVerbs} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
