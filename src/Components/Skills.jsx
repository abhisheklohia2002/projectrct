import React from 'react'
import Footer from './Footer'
import "./navbar.css"
const Skills = () => {
  return (
    <div style={{backgroundColor:"#c9b9c1"}}>
      <h1 style={{textAlign:"center",fontSize:"4vw",fontWeight:"500"}}>TOP SKILLS</h1>

<div style={{display:"grid",gridTemplateColumns:"100px 100px 100px ",columnGap:"18vw",rowGap:"2vw",margin:"auto",paddingLeft:"14vw",paddingTop:"2vw",marginBottom:"2vw"}}>
<div className='box' style={{border:"2px solid black",width:"18vw"}}>
    <img style={{height:"18vw",width:"18vw"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1180px-HTML5_logo_and_wordmark.svg.png" alt="" />
</div>


<div className='box' style={{border:"2px solid black",width:"18vw"}}>
    <img style={{height:"18vw",width:"18vw"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1180px-CSS3_logo_and_wordmark.svg.png" alt="" />
</div>


<div className='box' style={{border:"2px solid black",width:"18vw"}}>
    <img style={{height:"18vw",width:"18vw"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
</div>


<div className='box' style={{border:"2px solid black",width:"18vw"}}>

    <img style={{height:"18vw",width:"18vw"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1180px-Bootstrap_logo.svg.png" alt="" />
</div>


<div className='box' style={{border:"2px solid black",width:"18vw"}}>
    <img style={{height:"18vw",width:"18vw"}} src="https://chakra-ui.com/og-image.png" alt="" />
</div>
{/* <img style={{height:"18vw",width:"18vw"}} src="https://chakra-ui.com/og-image.png" alt="" />
</div> */}

<div className='box' style={{border:"2px solid black",width:"18vw"}}>
    <img style={{height:"18vw",width:"18vw"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1180px-React-icon.svg.png" alt="" />
</div>

<div className='box' style={{border:"2px solid black",width:"18vw"}}>
    <img style={{height:"18vw",width:"18vw"}} src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png" alt="" />
</div>


<div className='box' style={{border:"2px solid black",width:"18vw"}}>
    <img style={{height:"18vw",width:"18vw"}} src="https://www.nextontop.com/assets/img/services/web/expressjs.svg" alt="" />
</div>

<div className='box' style={{border:"2px solid black",width:"18vw"}}>
    <img style={{height:"18vw",width:"18vw"}} src="https://static.javatpoint.com/mongodb/images/mongodb-tutorial.jpg" alt="" />
</div>




</div>

{/* https://res.cloudinary.com/practicaldev/image/fetch/s--Lvl1ZNKy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1ph7yc1i1vqqgwpxegw5.png */}
<Footer/>

    </div>
  )
}

export default Skills
