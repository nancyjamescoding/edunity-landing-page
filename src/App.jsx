import { useState } from 'react'

import Header from './components/Header/Header'
import Topic from './components/Topic/Topic'
import About from './components/About/About'
import Stats from './components/Stats/Stats'

import './App.css'

function App() {

  return (
      <div className="main">
        <Header/>
        <Topic/>
        <About/>
        <Stats/>
      </div>
  )
}

export default App
