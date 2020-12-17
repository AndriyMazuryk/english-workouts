import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <nav className="nav">
        <Link to="/irregular-verbs">Irregular Verbs</Link>
      </nav>
    </>
  );
};

export default Home;
