import React from 'react'
import TestItem from './TestItem'

export default function TestsList({ tests, setCurrentTest }) {

  return (
    <div className="tests-list">
      {
        tests.map((test) => {
          return <TestItem
            key={test.id}
            id={test.id}
            title={test.title}
            setCurrentTest={setCurrentTest} />
        })
      }
    </div>
  )
}
