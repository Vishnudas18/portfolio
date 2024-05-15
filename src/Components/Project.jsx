import React, { useState } from 'react'
import '../Components/projects.css'
import Html from './Html'
import Javascript from './Javascript'
import Reactprj from './Reactprj'
import { Link, Route, Routes } from 'react-router-dom'
function Projects() {
    const [active,setactive]=useState("HTML & CSS")
    const clk=(value)=>{
        setactive(value)
    }
  return (
    <div style={{height:"1000px",paddingTop:"60px"}} id="projects">
        <h2 className='text-center ms-5'>Projects</h2>
      <ul style={{listStyleType:"none",marginTop:"50px"}} className='d-flex gap-4 justify-content-center'>
        <li><Link to={'/'}  className={active==="HTML & CSS"?"activeclass":""}  onClick={()=>clk("HTML & CSS")} >HTML & CSS</Link></li>
        <li><Link to={'/javascript'} className={active==="JavaScript"?"activeclass":""} onClick={()=>clk("JavaScript")} >JAVASCRIPT</Link></li>
        <li><Link to={'/react'} className={active==="REACT"?"activeclass":""} onClick={()=>clk("REACT")}>REACT</Link></li>
      </ul>
      <div  style={{marginLeft:"50px"}} className='pro mt-5'>
        <Routes>
            <Route path='/' element={<Html/>} />
            <Route path='/javascript' element={<Javascript/>} />
            <Route path='/react' element={<Reactprj/>} /> 
        </Routes>
      </div>
    </div>
  )
}

export default Projects