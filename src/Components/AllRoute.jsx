import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Project from '../Project'
import About from './About'
import Bodymain from './Bodymain'
import Contact from './Contact'
import Navbar from './Navbar'
import Skills from './Skills'

const AllRoute = () => {
  return (
    <div>
      <Routes>

        
        <Route  path = "/" element = {<Bodymain/>} />
        <Route  path = "/about" element = {<About/>} />
        <Route path = "/contact" element  = {<Contact/>}/>
        <Route path = "/skill" element = {<Skills/>} />
        <Route path  = "/project" element = {<Project/>}/>
        </Routes>
    </div>
  )
}

export default AllRoute
