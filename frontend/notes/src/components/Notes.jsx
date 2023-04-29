

import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
const Notes = () => {
    const [data,setdata]=useState([])
const navigate=useNavigate()
useEffect(()=>{

// let token=
// console.log(token)

fetch(`http://localhost:8080/notes`,{
    "headers":{
        "authorization":`Bearer ${JSON.parse(localStorage.getItem("token"))}`
    }
})
.then((res)=>{
    return res.json()
})
.then((res)=>{
    setdata(res)
    console.log(res)
})
},[])

  return (
    <div>

{data?.map((item)=>(
    <div key={item._id}>
    <h1>Author :{item.author}</h1>
        <h1>Title :{item.title}</h1>
        <h3>Body :{item.body}</h3>
        <h3>Category :{item.category}</h3>
    </div>
))}

<button onClick={()=>navigate("/make")}>Add Notes</button>
    </div>
  )
}

export default Notes