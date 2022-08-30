import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Bottom from './Bottom'
import Footer from './Footer'
import "./navbar.css"
const Bodymain = () => {
   const nav = useNavigate()
   const HandlClick = () => {
      nav("/contact");

   }
  return (
    <div style={{backgroundColor:"#c9b9c1"}}>
 <div className='scroll_text'>
    <p className='span1'>Turning Ideas into</p>
    <p><span className='span2'> Digital Experiences</span></p>
 </div>



 <div onClick={HandlClick} className='contactBox'>
    <a href="">


    <i className='fas fa-envelope' onClick={HandlClick} aria-hidden="true">
<span onClick={HandlClick}>Contact me</span>
    </i>
    </a>
 

 </div>


 <div>
    <img style={{width:"40vw",position:"relative",bottom:"10vw"}} src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=996&t=st=1661786996~exp=1661787596~hmac=f5d8d3234ad16bc9856cd3cf87d4305ea0b2d8cf0fea0569d607d7d05d4fc554" alt="" />
 </div>


<Bottom/>
 

    </div>


  )
}

export default Bodymain
