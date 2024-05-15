import React, { useState } from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import '../Components/Header.css'
import Darkmode1 from './DarkMode1';
import {HashLink as Link} from 'react-router-hash-link'

function Header1() {
  const [active,setactive]=useState("home")
  const updatelink=(e)=>{
    
    setactive(e)
  }
  return (
    <div className='Header1' style={{position:"sticky",top:0}} >
   <MDBNavbar className='p-3' expand='lg'>
        <MDBContainer fluid>
      
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            // onClick={() => setOpenNavColorSecond(!openNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse  navbar id='navbarColor02'>
            <MDBNavbarNav  className='me-auto mb-2 d-flex justify-content-center fw-medium  mb-lg-0'>
              <MDBNavbarItem className='ms-5 ' >
                <Link to={"#home"} scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })} className={active==="home"?"active-link":"not-active" } onClick={(e)=>updatelink("home")} aria-current='page'>
                  Home
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className='ms-5'>
                <Link  to={"#aboutme"} smooth className={active==="About"?"active-link":"not-active"} onClick={(e)=>updatelink("About")} >About</Link>
              </MDBNavbarItem>
              <MDBNavbarItem className='ms-5'>
   
                <Link  to={"#education"} scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })} className={active==="Education"?"active-link":"not-active"} onClick={(e)=>updatelink("Education")} >Education</Link>
              </MDBNavbarItem>
              <MDBNavbarItem className='ms-5'>
                <Link to={"#skills"} scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start' })} className={active==="skills"?"active-link":"not-active"} onClick={(e)=>updatelink("skills")}>Skills</Link>
              </MDBNavbarItem>
              <MDBNavbarItem className='ms-5'>
                <Link to={"#projects"} scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start' })} className={active==="Projects"?"active-link":"not-active"} onClick={(e)=>updatelink("Projects")}  >Projects</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          <div>
            <Darkmode1/>
          </div>
        </MDBContainer>
      </MDBNavbar>    
    </div>
  )
}

export default Header1