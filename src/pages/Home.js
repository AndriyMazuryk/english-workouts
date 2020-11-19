import React from 'react'
import { Link } from 'react-router-dom'

import { Header, Navbar, Footer } from '../components'

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar pageName={'Home'} />
      <main className="main">
        <div className="container">
          <h1>Home</h1>
          <nav className="nav">
            <Link to="/irregular-verbs">Irregular Verbs</Link>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  )
}
