import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Test, TestsList } from "../components";

const IrregularVerbs = () => {
  const [tests, setTests] = useState([]);
  const [currentTest, setCurrentTest] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await Axios.get("/irregularVerbsTests.js");
      setTests(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="main">
      <div className="container">
        {Number.isInteger(currentTest) ? (
          <Test test={tests[currentTest]} setCurrentTest={setCurrentTest} />
        ) : (
          <TestsList tests={tests} setCurrentTest={setCurrentTest} />
        )}
      </div>
    </main>
  );
};

export default IrregularVerbs;
