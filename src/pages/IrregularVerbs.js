import React from 'react'
import { Link } from 'react-router-dom'

import { Header, Footer } from '../components'

export default function IrregularVerbs() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <h1>Irregular Verbs</h1>
          <nav className="nav">
            <Link to="/">Home</Link>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  )
}