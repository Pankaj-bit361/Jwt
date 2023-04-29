
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
const Login = () => {

    const [data,setdata]=useState({})
const navigate=useNavigate()
const handlechange=(e)=>{
const {name,value}=e.target
setdata({...data,[name]:value})
}

const handlesubmit=(e)=>{
    e.preventDefault()
 console.log(data,"line 15")
fetch(`https://fuzzy-leggings-dove.cyclic.app/login`,{
  "method":"POST",
  "headers":{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(data) 
})
.then((res)=>{
  return res.json()
})
.then((res)=>{
console.log(res)
  localStorage.setItem("token",JSON.stringify(res.token))
  if(res.token){
navigate("/notes")
  }
})


}


  return (
    <div style={{ marginTop:"30vh"}}>
      <form onSubmit={handlesubmit}>
        <input  type="text" placeholder='email' name="email"    onChange={handlechange}/>
        <br/>
        <input  type="text" placeholder='password' name="password" onChange={handlechange}/>
        <br/>
        <button type='submit' >Submit</button>
        <br/>
      </form>
    </div>
  )
}

export default Login
