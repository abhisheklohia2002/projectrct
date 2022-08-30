import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Bodymain from './Bodymain'
import "./navbar.css"
const Navbar = () => {
    const nav = useNavigate()
    const GetBack = () => {
       nav("/")
    }
  return (
    <>
    <div style={{display:"flex",justifyContent:"space-between",height:"5vw"}}>
<div style={{display:"flex",cursor:"pointer"}}>
    <div>
        <img onClick={GetBack} style={{width:"3.2vw",height:"3.2vw"}} src="https://akshit3010.github.io/static/media/logo.60ed405f77b3613395c3.png" alt="" />
    </div>
    <div onClick={GetBack} style={{textAlign:"center",fontSize:"2vw",fontWeight:"bold"}}>
        Developer Service
    </div>
</div>


<div style={{display:"flex",justifyContent:"space-evenly",width:"50vw",textAlign:"center",fontSize:"1.2vw",fontWeight:"bold",paddingTop:"1vw",textTransform:"uppercase"}}>
    <div className='p'>
        <NavLink to  = "/">Home</NavLink>
    </div>
    <div className='p'>
      <NavLink to = "/about"> About</NavLink>
    </div>
    <div className='p'>
        Skills
    </div>

    <div className='p'>
        Projects
    </div>

    <div className='p'>
       <NavLink to  = "/contact">  Contact</NavLink>
    </div>

    <div className='p'>
        Resume
    </div>

</div>
    </div>



</>
  )
}

export default Navbar
