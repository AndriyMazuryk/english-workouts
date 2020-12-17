import React from "react";

const Main = ({ children }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="inner-container">{children}</div>
      </div>
    </main>
  );
};

export default Main;
