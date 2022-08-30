import React from 'react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from './Footer'
const Contact = () => {
const [formstate,setformstate] = useState({
    email:'',
    name:'',

})
const HandleSubmit = () =>{
    const nav = useNavigate()
    var obj = {
        name :formstate.name,
        email:formstate.email
    }

console.log(obj)

if(obj.name == " " || obj.email == " "){
    alert("send");
nav("/")
   
}
else {
    alert("something went wrong")
}

}

  return (
    <div style={{backgroundColor:"#c9b9c1"}}>
     <div style={{textAlign:"center",paddingLeft:"10vw",paddingTop:"2vw"}}>
        <img style={{height:"25vw"}} src="http://scubeprosolutions.xyz/wp-content/uploads/2022/08/web_design-3-1536x480.jpg" alt="" />
     </div>

     <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"6vw"}}>
        <div>
          <div>
          <em style={{fontSize:"2vw"}}>Contact US</em>
          </div>
          <div style={{width:"30vw",fontSize:"1.5vw",color:"#83858a"}}>
          For general inquiries, please contact by using the form on this page. We’d love to hear from you!
          </div>
          <div>
          Email : info@solutions.xyz
          </div>
        </div>

        <div>
        <div>
        <label htmlFor="">Name</label><br />
        <Input value = {formstate.name} onChange = {(e)=>setformstate(e.target.value)} placeholder='' size='md' style = {{width:"50vw",height:"4vw",paddingBottom:"1vw",fontSize:"1.2vw"}} />
        </div>


        <div>
        <label htmlFor="">Email</label><br />
        <Input value  = {formstate.email} onChange  = {(e)=>setformstate(e.target.value)} placeholder='' size='md' style = {{width:"50vw",height:"4vw",paddingBottom:"1vw",fontSize:"1.2vw"}} />
        </div>
        <div>
        <label htmlFor="">Description</label><br />
        <Input placeholder='Description' size='md' style = {{width:"50vw",height:"8vw",paddingBottom:"5vw",fontSize:"1.2vw"}} />
        </div>
<div style={{marginTop:"2vw",marginBottom:"2vw"}}>
<Button onClick={HandleSubmit} colorScheme='teal' size='lg'>
   Contact us
  </Button>
</div>

        </div>
     </div>


     <Footer/>
    </div>
  )
}

export default Contact
