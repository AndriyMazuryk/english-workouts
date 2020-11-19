import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export default function Navbar({ pageName }) {

  const tabs = [
    { name: 'Home', link: '/' },
    { name: 'Irregular Verbs', link: '/irregular-verbs' }
  ]

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__menu">
          {tabs.map(tab => <li
            key={tab.name}
            className={classNames({
              'navbar__item': true,
              'navbar__item--active': tab.name === pageName
            })}
          >
            <Link
              className="navbar__link"
              to={tab.link}
            >
              {tab.name}
            </Link>
          </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
