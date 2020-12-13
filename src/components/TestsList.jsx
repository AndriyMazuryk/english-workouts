import React from "react";
import TestItem from "./TestItem";

const TestsList = ({ tests, setCurrentTest }) => {
  return (
    <div className="tests-list">
      {tests.map((test) => {
        return (
          <TestItem
            key={test.id}
            id={test.id}
            title={test.title}
            setCurrentTest={setCurrentTest}
          />
        );
      })}
    </div>
  );
};

export default TestsList;
