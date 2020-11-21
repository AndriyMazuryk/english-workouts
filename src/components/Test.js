import React, { useState, useEffect } from 'react'
import IrregularVerbsTest from './IrregularVerbsTest'
import Results from './Results'

export default function Test({ test, setCurrentTest }) {

  const [maxTasks, setMaxTasks] = useState(0)
  const [currentTask, setCurrentTask] = useState(0)
  const [rightAnswers, setRightAnswers] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)

  const addRightAnswer = () => {
    setRightAnswers(rightAnswers + 1)
  }

  const addWrongAnswer = () => {
    setWrongAnswers(wrongAnswers + 1)
  }

  useEffect(() => {
    setMaxTasks(test.data.length)
  })

  const nextTask = () => {
    setCurrentTask(currentTask + 1)
  }

  return (
    test.data.length ?
      currentTask < maxTasks ?
        <div className="test">
          <h2 className="test__title">{test.title}</h2>
          <p className="test__description">{test.description}</p>
          <IrregularVerbsTest
            verb={test.data[currentTask]}
            addRightAnswer={addRightAnswer}
            addWrongAnswer={addWrongAnswer}
            nextTask={nextTask} />
          <p className="test__right-answers">Right Answers: {rightAnswers}</p>
          <p className="test__wrong-answers">Wrong Answers: {wrongAnswers}</p>
        </div> :
        <Results
        title={test.title}
        rightAnswers={rightAnswers}
        wrongAnswers={wrongAnswers}
        setCurrentTest={setCurrentTest} /> :
        <h1>Loading...</h1>
  )
}
