

import React from 'react'

import {Routes,Route} from "react-router-dom"
import Login from './Login'
import Signup from './Signup'
import Notes from './Notes'
import Notemaker from './Notemaker'


const Mainroutes = () => {
  return (
    <div>
      <Routes>

      <Route path='/login' element={<Login/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/notes" element={<Notes/>}/>
      <Route path="/make" element={<Notemaker/> }/>


      </Routes>
    </div>
  )
}

export default Mainroutes
