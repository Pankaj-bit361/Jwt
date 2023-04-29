import React, { useState } from 'react'

const init={
    name:"",
    password:"",
    email:"",
    age:0
}

const Signup = () => {

    const [data,setdata]=useState(init)

const handlechange=(e)=>{
const {name,value}=e.target
setdata({...data,[name]:value})
}

const handlesubmit=(e)=>{
    e.preventDefault()
 
fetch(`https://fuzzy-leggings-dove.cyclic.app`,{
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
})


}


  return (
    <div style={{ marginTop:"30vh"}}>
      <form onSubmit={handlesubmit}>
        <input  type="text" placeholder='email' name="email"    onChange={handlechange}/>
        <br/>
        <input  type="text" placeholder='name' name="name"  onChange={handlechange}/>
        <br/>
        <input  type="text" placeholder='password' name="password" onChange={handlechange}/>
        <br/>
        <input  type="Number" placeholder='age' name="age"  onChange={handlechange}/>
        <br/>
        <button type='submit'>Submit</button>
        <br/>
      </form>
    </div>
  )
}

export default Signup
