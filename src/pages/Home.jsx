import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="main">
      <div className="container">
        <h1>Home</h1>
        <nav className="nav">
          <Link to="/irregular-verbs">Irregular Verbs</Link>
        </nav>
      </div>
    </main>
  );
};

export default Home;
