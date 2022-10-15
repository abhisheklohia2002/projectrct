import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Bottom from './Bottom'
import Footer from './Footer'
import photo from "../image/lohia.png"
import "./navbar.css"
const Bodymain = () => {
   const nav = useNavigate()
   const HandlClick = () => {
      nav("/contact");

   }
  return (
   <>
    <div style={{backgroundColor:"#c9b9c1",overflow:"hidden"}}>
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


 <div style={{}}>
<div> <img style={{width:"25vw",position:"relative",bottom:"10vw",borderRadius:"12vw",left:"5vw"}} src= {photo} alt="" /></div>
    
 <div className="typewriter">
  <h1 className='h1'>Hi  I am Abhishek Lohia ,

   
  </h1>
<p className='mern'>  MERN Stack Developer</p>
<p className='mern'>
   I build Interactive Websites that run across platforms & device
</p>

</div>

 </div>

 


{/* <Bottom/>
 */}
  
 

    </div>
    <Footer/>

   </>

  )
}

export default Bodymain
