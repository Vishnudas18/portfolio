import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import TrackVisibility from 'react-on-screen';
import '../Components/Home.css'
function Home() {

  return (
    <TrackVisibility>
    {(isVisible)=>
    <div className='' id='home'>
      <div style={{ paddingTop: "50px", paddingBottom: "30px"}} className="container" >
        <div className='text-center'>
          <div  class={isVisible?"animate__animated animate__fadeInRight":""}>
          <div style={{ lineHeight: "100%" }} className='d-flex justify-content-center'>
            < hr style={{ width: "100px", borderTop: "3px solid red" }} />
            <p className='mt-2 text-danger'>P R E S E N T</p>
            < hr style={{ width: "100px", borderTop: "3px solid red" }} />
          </div>
          <h1 className='fs-1 text-info'>Vishnu Das</h1>
          <p style={{ fontSize: "10px" }} className='text-danger'>M&nbsp;&nbsp;&nbsp;&nbsp; E &nbsp;&nbsp;&nbsp;&nbsp; A&nbsp;&nbsp;&nbsp;&nbsp; R&nbsp;&nbsp;&nbsp;&nbsp; N</p>
          </div>
        </div>
        <div class={isVisible?"animate__animated animate__fadeInLeft":""} >
        <div style={{ marginTop: "100px" }}>
          <div  style={{ padding: "10px", backdropFilter: "blur(15px)", background: "rgba(255, 255, 255, 0.1", position: "relative", right: "30px" }} className="box  w-50 text-light d-flex flex-column  justify-content-center rounded">
            <h2 className='text-primary'>Hi Iam!</h2>
            <p style={{ textAlign: "justify" }}> I'm Vishnu Das, a skilled ME(A)RN stack developer passionate about crafting dynamic web applications. Explore my portfolio to see how I leverage MongoDB, Express.js, React.js, and Node.js to build innovative solutions. Let's connect and bring your digital ideas to life!</p>
            <div className=''>
              <h5 className='text-white'>Follow Me -</h5>
              <MDBBtn
                floating
                size='sm'
                className='m-1'
                style={{ backgroundColor: '#3b5998' }}
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>
              <MDBBtn
                floating
                size='sm'
                className='m-1'
                style={{ backgroundColor: '#ac2bac' }}
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='instagram' />
              </MDBBtn>
              <MDBBtn
                floating
                size='sm'
                className='m-1'
                style={{ backgroundColor: '#333333' }}
                href='#!'
                role='button'
              >
                <MDBIcon fab icon='github' />
              </MDBBtn>

            </div>
          </div>

        </div>
        </div>
      </div>
    
    </div>}
    </TrackVisibility>
  )
}

export default Home