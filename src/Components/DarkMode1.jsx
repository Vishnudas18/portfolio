import React from 'react'
import '../Components/darkmode.css'
function Darkmode1() {
const setdark=()=>{
 document.querySelector("body").setAttribute("data-theme","dark")
 localStorage.setItem("selectedTheme","dark")
}
const setlight=()=>{
 document.querySelector("body").setAttribute("data-theme","light")
 localStorage.setItem("selectedTheme","light")
}
const selectedTheme=localStorage.getItem("selectedTheme")
if(selectedTheme=="dark"){
  setdark()
}
const settheme=(e)=>{
if(e.target.checked){
  setlight()
}else{
  setdark()
}
}
  return (
    <div>
      <input type="checkbox" onChange={settheme} class="l"></input>
    </div>
  )
}

export default Darkmode1