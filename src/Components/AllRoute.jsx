import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Bodymain from './Bodymain'
import Contact from './Contact'
import Navbar from './Navbar'

const AllRoute = () => {
  return (
    <div>
      <Routes>

        
        <Route  path = "/" element = {<Bodymain/>} />
        <Route  path = "/about" element = {<About/>} />
        <Route path = "/contact" element  = {<Contact/>}/>
        </Routes>
    </div>
  )
}

export default AllRoute
