import React from 'react'

import { Header, Footer } from '../components'

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <div className="container">
            <h1>Home</h1>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
