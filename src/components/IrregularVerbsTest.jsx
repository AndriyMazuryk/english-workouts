import React, { useRef } from "react";

const IrregularVerbsTest = ({
  verb,
  addRightAnswer,
  addWrongAnswer,
  nextTask,
}) => {
  const infinitiveRef = useRef("");
  const pastSimpleRef = useRef("");
  const pastParticipleRef = useRef("");

  const checkAnswers = () => {
    if (
      infinitiveRef.current.value === verb.infinitive &&
      pastSimpleRef.current.value === verb.pastSimple &&
      pastParticipleRef.current.value === verb.pastParticiple
    ) {
      addRightAnswer();
      nextTask();
    } else {
      addWrongAnswer();
      nextTask();
    }
  };

  return (
    <div className="test__verbs">
      {console.log(verb)}
      <h3 className="test__word">{verb.translation}</h3>
      <div className="test__group">
        <label htmlFor="infinitive">Infinitive:</label>
        <input
          type="text"
          name="infinitive"
          ref={infinitiveRef}
          id="infinitive"
        />
        <label htmlFor="pastSimple">Past Simple</label>
        <input
          type="text"
          name="pastSimple"
          ref={pastSimpleRef}
          id="pastSimple"
        />
        <label htmlFor="pastParticiple">Past Participle</label>
        <input
          type="text"
          name="pastParticiple"
          ref={pastParticipleRef}
          id="pastParticiple"
        />
      </div>
      <button onClick={() => checkAnswers()}>Ok</button>
    </div>
  );
};

export default IrregularVerbsTest;
