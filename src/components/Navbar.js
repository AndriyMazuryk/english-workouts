import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export default function Navbar({ pageName }) {

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Irregular Verbs', link: '/irregular-verbs' }
  ]

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__menu">
          {navItems.map(item => <li
            key={item.name}
            className={classNames({
              'navbar__item': true,
              'navbar__item--active': item.name === pageName
            })}
          >
            <Link
              className="navbar__link"
              to={item.link}
            >
              {item.name}
            </Link>
          </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
