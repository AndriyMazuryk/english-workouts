import React from "react";

const TestItem = ({ id, title, setCurrentTest }) => {
  return (
    <button className="test-item" onClick={() => setCurrentTest(id)}>
      <h3 className="test-item__title">{title}</h3>
    </button>
  );
};

export default TestItem;
