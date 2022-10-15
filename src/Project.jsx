import React from 'react'
// import React from 'react'
import track from "./image/toggle.png"
import "../src/Components/navbar.css"
import { Link, NavLink, useNavigate, } from 'react-router-dom'
// import Footer from './Footer'
import hotstar from "./Components/Hotstar.png"
// import hotstar from "../image/"
import wheather from "./image/Wheather Forcast.png"
import Star from "./image/star War.png"
import roll from "./image/rolldice.png"
import expedia from "./image/Expedia clone.png"
// import youtube from "../image/youtube.png"
import { Button, ButtonGroup } from '@chakra-ui/react';
import snaptube from "./image/youtube.png"
import Footer from './Components/Footer'
const Project = () => {
  const GitYouTube = () => {
    console.log(-1)
  }
  // <FontAwesomeIcon icon="fa-brands fa-github" />
  return (
    <>

      <div style={{ backgroundColor: "#e9ecf2" }}>
        <div className='project' style={{ textAlign: "center", fontSize: "3.5vw", fontWeight: "bold" }}>
          Projects
        </div>

        <div className='grid' >

          <div className='box' style={{ width: "28vw", height: "auto" }}>
            <img style={{ height: "18vw", width: "27vw", paddingLeft: "0.8vw", paddingTop: "0.8vw" }} src={snaptube} alt="hotstar app" />
            <p style={{ fontSize: "1.5vw", fontWeight: "500", textTransform: "uppercase", paddingLeft: "2vw", paddingTop: "1vw" }}>YouTube App</p>
            <p style={{ paddingLeft: "2vw" }}>This Youtube Website was made by HTML,CSS and Javascript. When You click the below liveDemo Button You should be redirect on the Youtube Website and some Gitcode also mention below the gitcode Button you can check the code of this Website</p>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "2vw", marginTop: "2vw", textTransform: "uppercase", paddingLeft: "1vw", paddingTop: "0vw" }}>
              <div>
                <Button onClick={GitYouTube} colorScheme='teal' size='sm' style={{ textTransform: "uppercase", paddingLeft: "1vw", paddingTop: "0vw" }}>
                  <a href={'https://github.com/abhisheklohia2002/YouTube.git'} target="_blank"  >GitCode</a>
                </Button>
              </div>
              <div>
                <Button colorScheme='teal' size='sm' style={{ textTransform: "uppercase", paddingLeft: "1vw", paddingTop: "0vw" }}>
                  <a href="https://verdant-dusk-bd1054.netlify.app/" target="_blank" >LiveDemo</a>
                </Button>
              </div>
            </div>
          </div>
          <div className='box' style={{ width: "28vw", height: "auto" }}>
            <img style={{ height: "18vw", width: "27vw", paddingLeft: "0.8vw", paddingTop: "0.8vw" }} src={wheather} alt="Wheather app" />
            <p style={{ fontSize: "1.5vw", fontWeight: "500", textTransform: "uppercase", paddingLeft: "2vw", paddingTop: "1vw" }}>Wheather App</p>
            <p style={{ paddingLeft: "2vw" }}>This Wheather Forecast App it was made by HTML ,CSS and Javascript with Wheather Api, When You click the Live Demo Button You should be redirect on the Wheathe app. There some Code of Wheather app is provide below the decription , when you click gitcode you can check code of wheather App</p>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "2vw", marginTop: "2vw" }}>
              <div >
                <Button onClick={GitYouTube} colorScheme='teal' size='sm' style={{ textTransform: "uppercase", paddingLeft: "1vw", paddingTop: "0vw" }}>
                  <a href={'https://github.com/abhisheklohia2002/report'} target="_blank"  >GitCode</a>
                </Button>
              </div>
              <div>
                <Button colorScheme='teal' size='sm' style={{ textTransform: "uppercase", paddingLeft: "1vw", paddingTop: "0vw" }}>
                  <a href="https://coruscating-platypus-700da9.netlify.app" target="_blank" >LiveDemo</a>
                </Button>
              </div>
            </div>
          </div>
          <div className='box' style={{ width: "28vw", height: "auto" }}>
            <img style={{ height: "18vw", width: "27vw", paddingLeft: "0.8vw", paddingTop: "0.8vw" }} src={Star} alt="Star War" />
            <p style={{ fontSize: "1.5vw", fontWeight: "500", textTransform: "uppercase", paddingLeft: "2vw", paddingTop: "1vw" }} >Star War</p>
            <p style={{ paddingLeft: "2vw" }}>This Star War app . where you can check or search the character of star war movie ,it was made by HTML,Css and Javascript some debounce property happen in the Website</p>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "2vw", marginTop: "2vw" }}>
              <div>
                <Button onClick={GitYouTube} colorScheme='teal' size='sm' style={{ textTransform: "uppercase", paddingLeft: "1vw", paddingTop: "0vw" }}>
                  <a href={'https://github.com/abhisheklohia2002/star-war'} target="_blank"  >GitCode</a>
                </Button>
              </div>
              <div>
                <Button colorScheme='teal' size='sm' style={{ textTransform: "uppercase", paddingLeft: "1vw", paddingTop: "0vw" }}>
                  <a href="https://chipper-madeleine-128f44.netlify.app/" target="_blank" >LiveDemo</a>
                </Button>
              </div>
            </div>
          </div>
          <div className='box' style={{ width: "28vw", height: "auto" }}>
            <img style={{ height: "18vw", width: "27vw", paddingLeft: "0.8vw", paddingTop: "0.8vw" }} src={roll} alt="RollDice" />
            <p style={{ fontSize: "1.5vw", fontWeight: "500", textTransform: "uppercase", paddingLeft: "2vw", paddingTop: "1vw" }}>Roll dice Game</p>
            <p style={{ paddingLeft: "2vw" }}>This Roll dice game , Where you can play with the Dice , If you get Green color mean you win that match , if you get yellow mean you below the Winner , if you get Red color mean you lose that match</p>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "2vw", marginTop: "2vw" }}>
              <div >
                <Button onClick={GitYouTube} colorScheme='teal' size='sm' style={{ textTransform: "uppercase", paddingLeft: "1vw", paddingTop: "0vw" }}>
                  <a href={''} target="_blank"  >GitCode</a>
                </Button>
              </div>
              <div>
                <Button colorScheme='teal' size='sm' style={{ textTransform: "uppercase", paddingLeft: "1vw", paddingTop: "0vw" }}>
                  <a href="https://wondrous-tarsier-4ff3a4.netlify.app" target="_blank" >LiveDemo</a>
                </Button>
              </div>
            </div>
          </div>
          <div className='box' style={{ width: "28vw", height: "auto" }}>
            <img style={{ height: "18vw", width: "27vw", paddingLeft: "0.8vw", paddingTop: "0.8vw" }} src={expedia} alt="expedia" />
            <p style={{ fontSize: "1.5vw", fontWeight: "500", textTransform: "uppercase", paddingLeft: "2vw", paddingTop: "1vw" }}>Expedia Clone </p>
            <p style={{ paddingLeft: "2vw" }}>This Website is a clone of Expedia ,it was made by HTML,CSS and Javascript , json server and Some Sort  functionalitie is Provide there, </p>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "2vw", marginTop: "2vw" }}>
              <div>
                <Button onClick={GitYouTube} colorScheme='teal' size='sm' style={{ textTransform: "uppercase", paddingLeft: "1vw", paddingTop: "0vw" }}>
                  <a href={'https://github.com/aman-109/Team-Expedia'} target="_blank"  >GitCode</a>
                </Button>
              </div>
              <div>
                <Button colorScheme='teal' size='sm' style={{ textTransform: "uppercase", paddingLeft: "1vw", paddingTop: "0vw" }}>
                  <a href="https://inquisitive-starburst-5fb2bd.netlify.app" target="_blank" >LiveDemo</a>
                </Button>
              </div>
            </div>

          </div>



          <div className='box' style={{ width: "28vw", height: "auto" }}>
            <img style={{ height: "18vw", width: "27vw", paddingLeft: "0.8vw", paddingTop: "0.8vw" }} src={hotstar} alt="hotstar" />
            <p style={{ fontSize: "1.5vw", fontWeight: "500", textTransform: "uppercase", paddingLeft: "2vw", paddingTop: "1vw" }}>Hotstar </p>
            <p style={{ paddingLeft: "2vw" }}>In This Website , You can search any movie , where you can check also trending movie on the display , When you Click Livedemo button you will redirect on the app , </p>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "2vw", marginTop: "2vw" }}>
              <div>
                <Button onClick={GitYouTube} colorScheme='teal' size='sm' style={{ textTransform: "uppercase", paddingLeft: "1vw", paddingTop: "0vw" }}>
                  <a href={'https://github.com/abhisheklohia2002/movieapp'} target="_blank"  >GitCode</a>
                </Button>
              </div>
              <div>
                <Button colorScheme='teal' size='sm' style={{ textTransform: "uppercase", paddingLeft: "1vw", paddingTop: "0vw" }}>
                  <a href="https://incredible-monstera-064650.netlify.app" target="_blank" >LiveDemo</a>
                </Button>
              </div>
            </div>

          </div>




          <div className='box' style={{ width: "28vw", height: "auto", paddingBottom: "0.1vw" }}>
            <img style={{ height: "18vw", width: "27vw", paddingLeft: "0.8vw", paddingTop: "0.8vw" }} src={track} alt="RollDice" />
            <p style={{ fontSize: "1.5vw", fontWeight: "500", textTransform: "uppercase", paddingLeft: "2vw", paddingTop: "1vw" }}>Toggletrack react app</p>
            <p style={{ paddingLeft: "2vw" }}>Toggl Track is a time tracking app that allows you to track your daily activities across different platforms; providing you with detailed insights and an opportunity to optimize your workflow by identifying areas where you can improve.</p>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "2vw", marginTop: "2vw" }}>
              <div >
                <Button onClick={GitYouTube} colorScheme='teal' size='sm' style={{ textTransform: "uppercase", paddingLeft: "1vw", paddingTop: "0vw" }}>
                  <a href={'https://drive.google.com/file/d/1kpETRZMGHqPw_tNpao0DLmjBrgTApeNW/view?usp=sharing'} target="_blank"  >Presentation</a>
                </Button>
              </div>

            </div>
          </div>




        </div>




      </div>



      <div>
        <Footer />
      </div>
    </>
  )
}

export default Project
