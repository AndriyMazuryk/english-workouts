import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link className="header__link" to="/">English Workouts</Link>
        </div>
      </div>
    </header>
  )
}
