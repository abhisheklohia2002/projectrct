import React from 'react'
// import NavLink from "react-router-dom"
import { NavLink } from 'react-router-dom'
import Bottom from './Bottom'
import Footer from './Footer'
import "./navbar.css"
const About = () => {
  return (
    <div style={{backgroundColor:"#c9b9c1"}}>
      <div style={{textAlign:"center", fontSize:"3.2vw",textTransform:"uppercase",fontWeight:"bold"}}>
        About me
      </div>



      <div style={{fontFamily:"sans-serif",fontSize:"2.8vw",color:"grey",textAlign:"center"}} >
        {/* <img style={{width:"100%",height:"80vw"}} src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /> */}
      Create Unique Design with Experienced Designers
      </div>


      <div style={{paddingLeft:"2vw",fontSize:"3vw",paddingTop:"2vw",}}>
        <em className='em' style={{color:"#34ebbd"}}>Trusted Professionals</em>
        <p>
       {"   "} for Website Designing
        </p>
      </div>



      <div>


        
        <p style={{height:"10vw",width:"50vw",paddingLeft:"2vw",fontSize:"1.2vw",marginTop:"3vw"}}>
        If you need a reliable professional to take care of your website, then you need to look no further than Trusted Professional For Websites. We have years of experience in the industry and know how to get the job done right. We’ll make sure that your website is up and running smoothly, and we’ll also provide ongoing support so that you can keep your site running smoothly. Contact us today to learn more about our services and how we can help you take care of your website.
        </p>

        <p style={{height:"10vw",width:"50vw",paddingLeft:"2vw",fontSize:"1.2vw",marginTop:"3vw"}}>
        If you need someone to take care of your website, then look no further than Trusted Professional For Websites. We have years of experience in the industry and know how to get the job done right. We’ll make sure that your website is up and running smoothly, and we can even provide ongoing support so that you can keep your site running smoothly. Contact us today to learn more about our services and how we can help you take care of your website. You won’t be disappointed with what we can do for you!
        </p>
      </div>


      <div style={{textAlign:"center",paddingLeft:"10vw",paddingTop:"2vw"}}>
        <img style={{width:"80vw",height:"25vw"}} src="http://scubeprosolutions.xyz/wp-content/uploads/2022/08/web_design-1-1536x480.jpg" alt="" />
      </div>



      {/* <div className='grid' >
        <div style={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",width:"25vw",height:"30vw"}}>
            <img style={{height:"18vw",width:"25vw"}} src="http://scubeprosolutions.xyz/wp-content/uploads/2022/08/Website-Desiging.jpg" alt="" />
            <p style={{fontSize:"1.5vw",fontWeight:"500"}}>Website Designing</p>
            <p>As a website design company, we offer a wide range of services that can help you get the most out of your web presence. Whether you need a new website or want to redesign your existing site, we can help. We also offer a variety of other services.</p>
        </div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",width:"25vw",height:"auto"}}>
            <img style={{height:"18vw",width:"25vw"}} src="http://scubeprosolutions.xyz/wp-content/uploads/2022/08/App-Development.jpg" alt="" />
            <p style={{fontSize:"1.5vw",fontWeight:"500"}}>App Development</p>
            <p>App development is the process of designing, creating, testing, and deploying mobile apps. The term “app” is a shortening of the word “application.” Apps are generally small, individual software units with specific functionality. They are typically designed to be downloaded and installed on mobile devices, such as smartphones and tablets.</p>
        </div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",width:"25vw",height:"30vw"}}>
            <img style={{height:"18vw",width:"25vw"}} src="http://scubeprosolutions.xyz/wp-content/uploads/2022/08/Websit-Development.jpg" alt="" />
            <p style={{fontSize:"1.5vw",fontWeight:"500"}} >Website Development</p>
            <p>There are many different types of website development, but the most common and popular type is front-end web development. Front-end web development is responsible for everything that you see and interact with on a website. This includes the layout, design, and overall user experience.</p>
        </div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",width:"25vw",height:"30vw"}}>
            <img style={{height:"18vw",width:"25vw"}} src="http://scubeprosolutions.xyz/wp-content/uploads/2022/08/Image.jpg" alt="" />
            <p style={{fontSize:"1.5vw",fontWeight:"500"}}>Website Designing</p>
          <p>The software development process is the set of activities that software developers use to plan, create, test, and deploy new software applications.</p>
        </div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",width:"25vw",height:"30vw"}}>
            <img style={{height:"18vw",width:"25vw"}} src="http://scubeprosolutions.xyz/wp-content/uploads/2022/08/Website-Desiging.jpg" alt="" />
            <p style={{fontSize:"1.5vw",fontWeight:"500"}}>Artificial Intelligence</p>
            <p>The term “artificial intelligence” was first coined in 1956, at a conference held at Dartmouth College. Since then, AI has become one of the most hotly contested and debated topics in all of science and technology.</p>
        </div>
      </div> */}

{/* <div style={{marginTop:"2vw",textDecoration:"underline",cursor:"pointer",backgroundColor:"#e6d5dd"}}>
<div style={{textAlign:"center",fontSize:"3vw"}}>
  Contact me
</div>

      <div style={{display:"flex",justifyContent:"space-evenly",paddingTop:"5vw"}}>
     
<div >
  <button style={{backgroundColor:"#d16499",height:"4vw",width:"10vw",fontSize:"1.5vw",color:"white",cursor:"pointer"}}>Chat With us</button>
</div>
      <div>
      
    <button style={{backgroundColor:"#d16499",height:"4vw",width:"10vw",fontSize:"1.5vw",color:"white",cursor:"pointer"}}>  <NavLink to= "/contact"  > Contact us</NavLink></button> 
      </div>
      </div>

      </div> */}
      <Bottom/>
      {/* <Footer/> */}
    </div>
  )
}

export default About
