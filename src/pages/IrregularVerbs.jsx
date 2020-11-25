import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import { Header, Navbar, Footer, Test, TestsList } from '../components'

export default function IrregularVerbs() {

  const [tests, setTests] = useState([])
  const [currentTest, setCurrentTest] = useState('')

  const fetchData = async () => {
    try {
      const { data } = await Axios.get('/irregularVerbsTests.js')
      setTests(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Navbar pageName={'Irregular Verbs'} />
      <main className="main">
        <div className="container">
          {
            Number.isInteger(currentTest) ?
              <Test test={tests[currentTest]} setCurrentTest={setCurrentTest} /> :
              <TestsList tests={tests} setCurrentTest={setCurrentTest} />
          }
        </div>
      </main>
      <Footer />
    </div>
  )
}
