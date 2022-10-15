import React from 'react'
// import NavLink from "react-router-dom"
import { NavLink } from 'react-router-dom'
import Bottom from './Bottom'
import Footer from './Footer'
import "./navbar.css"
const About = () => {
  return (
    <>
    <div style={{backgroundColor:"#e9ecf2",paddingBottom:"2vw"}}>
      <div style={{textAlign:"center", fontSize:"3.2vw",textTransform:"uppercase",fontWeight:"bold"}}>
        About me
      </div>



      <div style={{fontFamily:"sans-serif",fontSize:"2.8vw",color:"grey",textAlign:"center"}} >
        {/* <img style={{width:"100%",height:"80vw"}} src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /> */}
      Create Unique Design with Experienced Designers
      </div>


      <div style={{paddingLeft:"2vw",fontSize:"3vw",paddingTop:"2vw",}}>
        <h4>Hi, My Name is</h4>
        <em className='em' style={{color:"#34ebbd"}}>Abhishek Lohia</em>
        <p>
       {"   "} I Build the Things for the Web
        </p>
      </div>



      <div>


        
        <p style={{height:"10vw",width:"50vw",paddingLeft:"2vw",fontSize:"1.2vw",marginTop:"3vw"}}>
       One of the favourite Quote is by Linus Trovalds -Talk is Cheap and Show me the code  <br />
       I Went from Printing the "Hello World" to Beacoming an enthusiastic and Passionate Full Stack web developer, I am Skilled , Collaborative and attentive with drive to develope the most Relevent Products,I have always Pushed Myself to learn something new to enhance the skills acquired through experience.

        </p>

        <p style={{height:"10vw",width:"50vw",paddingLeft:"2vw",fontSize:"1.2vw",marginTop:"3vw"}}>
        I Have been studying the Btech electrical Engg . I got Interested in Coding . After Diploma i get the admission in Btech 2nd year . where i had got the Interested in coding . I Started learning How to code with the Help of of YouTube Videos. <br />
        I was able to gather the lots of technical Skills of which are HTML,CSS and Javascript ,Python,  React,Chakra UI, Bootstrap , JSON, and API,NodeJs , Expressjs  AutoCad as along as I Got the Soft skills like Team Work , Time Managemnet , Collabrative Work, Self Motivate 


        </p>
      </div>


     


      {/* <Bottom/>
       */}
   
      
    </div>
    <div>
          <Footer/>
    </div>
    </>
  )
}

export default About
