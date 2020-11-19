import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__menu">
          <li className="navbar__item"><Link className="navbar__link" to="/">Home</Link></li>
          <li className="navbar__item"><Link className="navbar__link" to="/irregular-verbs">Irregular Verbs</Link></li>
        </ul>
      </div>
    </nav>
  )
}
