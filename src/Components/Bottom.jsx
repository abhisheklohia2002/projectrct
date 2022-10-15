import React from 'react'

import "./navbar.css"
import { Link, NavLink, useNavigate, } from 'react-router-dom'
import Footer from './Footer'
import hotstar from "./Hotstar.png"
// import hotstar from "../image/"
import wheather from "../image/Wheather Forcast.png"
import Star from "../image/star War.png"
import roll from "../image/rolldice.png"
import expedia from "../image/Expedia clone.png"
import youtube from "../image/youtube.png"
import { Button, ButtonGroup } from '@chakra-ui/react';

const Bottom = () => {
  const GitYouTube = () => {

console.log(1)

  }
  return (
    <>
    <div>
      <div style={{textAlign:"center",fontSize:"3.5vw",fontWeight:"bold"}}>
        Project
      </div>

      <div className='grid' >
        
        <div style={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",width:"25vw",height:"auto"}}>
            <img style={{height:"18vw",width:"25vw"}} src={youtube} alt="hotstar app" />
            <p style={{fontSize:"1.5vw",fontWeight:"500",textTransform:"uppercase"}}>YouTube App</p>
            <p>This Youtube Website was made by HTML,CSS and Javascript. When You click the below liveDemo Button You should be redirect on the Youtube Website and some Gitcode also mention below the gitcode Button you can check the code of this Website</p>
<div style={{display:"flex",justifyContent:"space-evenly",marginBottom:"2vw",marginTop:"2vw",textTransform:"uppercase"}}>
   <div>
  <Button onClick={GitYouTube} colorScheme='teal' size='sm' style={{textTransform:"uppercase"}}>
  <a href={'https://github.com/abhisheklohia2002/YouTube.git'} target="_blank"  >GitCode</a>
  </Button>
  </div>
  <div>
  <Button colorScheme='teal' size='sm'  style={{textTransform:"uppercase"}}>
    <a href="https://verdant-dusk-bd1054.netlify.app/" target="_blank" >LiveDemo</a>
  </Button>
  </div>
</div>
        </div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",width:"25vw",height:"auto"}}>
            <img style={{height:"18vw",width:"25vw"}} src={wheather} alt="Wheather app" />
            <p style={{fontSize:"1.5vw",fontWeight:"500",textTransform:"uppercase"}}>Wheather App</p>
            <p>This Wheather Forecast App it was made by HTML ,CSS and Javascript with Wheather Api, When You click the Live Demo Button You should be redirect on the Wheathe app. There some Code of Wheather app is provide below the decription , when you click gitcode you can check code of wheather App</p>
            <div  style={{display:"flex",justifyContent:"space-evenly",marginBottom:"2vw",marginTop:"2vw"}}>
   <div >
   <Button onClick={GitYouTube} colorScheme='teal' size='sm' style={{textTransform:"uppercase"}}>
  <a href={'https://github.com/abhisheklohia2002/report'} target="_blank"  >GitCode</a>
  </Button>
  </div>
  <div>
  <Button colorScheme='teal' size='sm'  style={{textTransform:"uppercase"}}>
    <a href="https://coruscating-platypus-700da9.netlify.app" target="_blank" >LiveDemo</a>
  </Button>
  </div>
</div>
        </div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",width:"25vw",height:"auto"}}>
            <img style={{height:"18vw",width:"25vw"}} src= {Star} alt="Star War" />
            <p style={{fontSize:"1.5vw",fontWeight:"500",textTransform:"uppercase"}} >Star War</p>
            <p>This Star War app . where you can check or search the character of star war movie ,it was made by HTML,Css and Javascript some debounce property happen in the Website</p>
            <div  style={{display:"flex",justifyContent:"space-evenly",marginBottom:"2vw",marginTop:"2vw"}}>
   <div>
   <Button onClick={GitYouTube} colorScheme='teal' size='sm' style={{textTransform:"uppercase"}}>
  <a href={'https://github.com/abhisheklohia2002/star-war'} target="_blank"  >GitCode</a>
  </Button>
  </div>
  <div>
  <Button colorScheme='teal' size='sm'  style={{textTransform:"uppercase"}}>
    <a href="https://chipper-madeleine-128f44.netlify.app/" target="_blank" >LiveDemo</a>
  </Button>
  </div>
</div>
        </div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",width:"25vw",height:"auto"}}>
            <img style={{height:"18vw",width:"25vw"}} src= {roll} alt="RollDice" />
            <p style={{fontSize:"1.5vw",fontWeight:"500",textTransform:"uppercase"}}>Roll dice Game</p>
          <p>This Roll dice game , Where you can play with the Dice , If you get Green color mean you win that match , if you get yellow mean you below the Winner , if you get Red color mean you lose that match</p>
          <div  style={{display:"flex",justifyContent:"space-evenly",marginBottom:"2vw",marginTop:"2vw"}}>
  <div >
  <Button onClick={GitYouTube} colorScheme='teal' size='sm' style={{textTransform:"uppercase"}}>
  <a href={''} target="_blank"  >GitCode</a>
  </Button>
  </div>
  <div>
  <Button colorScheme='teal' size='sm'  style={{textTransform:"uppercase"}}>
    <a href="https://wondrous-tarsier-4ff3a4.netlify.app" target="_blank" >LiveDemo</a>
  </Button>
  </div>
</div>
        </div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",width:"25vw",height:"auto"}}>
            <img style={{height:"18vw",width:"25vw"}} src= {expedia} alt="expedia" />
            <p style={{fontSize:"1.5vw",fontWeight:"500",textTransform:"uppercase"}}>Expedia Clone </p>
            <p>This Website is a clone of Expedia ,it was made by HTML,CSS and Javascript , json server and Some Sort  functionalitie is Provide there, </p>
            <div  style={{display:"flex",justifyContent:"space-evenly",marginBottom:"2vw",marginTop:"2vw"}}>
   <div>
   <Button onClick={GitYouTube} colorScheme='teal' size='sm' style={{textTransform:"uppercase"}}>
  <a href={'https://github.com/aman-109/Team-Expedia'} target="_blank"  >GitCode</a>
  </Button>
  </div>
  <div>
  <Button colorScheme='teal' size='sm'  style={{textTransform:"uppercase"}}>
    <a href="https://inquisitive-starburst-5fb2bd.netlify.app" target="_blank" >LiveDemo</a>
  </Button>
  </div>
</div>

        </div>



        <div style={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",width:"25vw",height:"auto"}}>
            <img style={{height:"18vw",width:"25vw"}} src= {hotstar} alt="expedia" />
            <p style={{fontSize:"1.5vw",fontWeight:"500",textTransform:"uppercase"}}>Hotstar </p>
            <p>In This Website , You can search any movie , where you can check also trending movie on the display , When you Click Livedemo button you will redirect on the app , </p>
            <div  style={{display:"flex",justifyContent:"space-evenly",marginBottom:"2vw",marginTop:"2vw"}}>
   <div>
   <Button onClick={GitYouTube} colorScheme='teal' size='sm' style={{textTransform:"uppercase"}}>
  <a href={'https://github.com/abhisheklohia2002/movieapp'} target="_blank"  >GitCode</a>
  </Button>
  </div>
  <div>
  <Button colorScheme='teal' size='sm'  style={{textTransform:"uppercase"}}>
    <a href="https://incredible-monstera-064650.netlify.app" target="_blank" >LiveDemo</a>
  </Button>
  </div>
</div>



        
      </div>

{/* <div style={{marginTop:"2vw",textDecoration:"underline",cursor:"pointer",backgroundColor:"#e6d5dd"}}>
<div style={{textAlign:"center",fontSize:"3vw"}}>
  Contact me
</div>

      <div style={{display:"flex",justifyContent:"space-evenly",paddingTop:"5vw"}}>
     
<div >
  <button style={{backgroundColor:"#d16499",height:"4vw",width:"10vw",fontSize:"1.5vw",color:"white",cursor:"pointer"}}>Chat With us</button>
</div>
      <div>
      
    <button style={{backgroundColor:"#d16499",height:"4vw",width:"10vw",fontSize:"1.5vw",color:"white",cursor:"pointer",marginBottom:"2vw"}}>  <NavLink to= "/contact"  > Contact us</NavLink></button> 
      </div>
      </div>
      </div> */}

     

    </div>
  
    </div>

    <Footer/>
   </>
  )
}

export default Bottom

