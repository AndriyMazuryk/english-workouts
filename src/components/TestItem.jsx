import React from 'react'

export default function TestItem({ id, title, setCurrentTest }) {
  return (
    <button className="test-item" onClick={() => setCurrentTest(id)}>
      <h3 className="test-item__title">{title}</h3>
    </button>
  )
}
