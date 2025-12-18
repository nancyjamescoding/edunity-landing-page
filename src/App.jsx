import { useState } from 'react'

import Header from './components/Header/Header'
import Topic from './components/Topic/Topic'
import About from './components/About/About'
import Stats from './components/Stats/Stats'
import Courses from './components/Courses/Courses'
import Offer from './components/Offer/Offer'
import WorkProcess from './components/WorkProcess/WorkProcess'
import CourseCTA from './components/CourseCTA/CourseCTA'
import Testimonial from './components/Testimonial/Testimonial'
import Register from './components/Register/Register'
import Events from './components/Events/Events'
import Footer from './components/Footer/Footer'
import './App.css'
import Blog from './components/Blog/Blog'

function App() {

  return (
      <div className="main">
        <Header/>
        <Topic/>
        <About/>
        <Stats/>
        <Courses/>
        <Offer/>
        <WorkProcess/>
        <CourseCTA/>
        <Testimonial/>
        <Register/>
        <Events/>
        <Blog/>
        <Footer/>
       
      </div>
  )
}

export default App
