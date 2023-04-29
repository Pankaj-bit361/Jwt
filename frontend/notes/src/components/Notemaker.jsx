import React, { useState } from 'react'

const init={
    title:"",
    body:"",
    category:"",
}

const Notemaker = () => {
    const [data,setdata]=useState(init)
const handlechange=(e)=>{
const {name,value}=e.target
setdata({...data,[name]:value})
}


const handlesubmit=(e)=>{
    e.preventDefault()
console.log(data)
let token=JSON.parse(localStorage.getItem("token"))
console.log(token,"line 21 ")
fetch(`https://fuzzy-leggings-dove.cyclic.app/add`,{
  "method":"POST",
  "headers":{
   Authorization:`Bearer ${token}`
  },
  body:JSON.stringify(data) 
})
.then((res)=>{
  return res.json()
})
.then((res)=>{
    console.log(res)
  console.log(res)
})
}


  return (
    <div style={{ marginTop:"30vh"}}>
      <form onSubmit={handlesubmit}>
        <input  type="text" placeholder='title' name="title"    onChange={handlechange}/>
        <br/>
        <input  type="text" placeholder='body' name="body"  onChange={handlechange}/>
        <br/>
        <input  type="text" placeholder='category' name="category" onChange={handlechange}/>
        <br/>
       
        <button type='submit'>Submit</button>
        <br/>
      </form>
    </div>
  )
}

export default Notemaker
