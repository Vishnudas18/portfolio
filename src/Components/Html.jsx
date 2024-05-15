import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBRipple } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import image1 from '../images/Screenshot 2024-01-28 104214.png'
import image2 from '../images/Screenshot 2024-02-01 094842.png'
import image3 from '../images/Screenshot 2024-02-01 094948.png'
function Html() {
  return (
    <div style={{paddingRight:"150px",paddingLeft:"150px"}} className='d-flex'>
 <Container>
    <Row className='mx-5'>
       <Col>
      <div className='p-2'>
      <MDBRipple rippleTag='a'>
        <img width={"300px"}
          src={image1}
          className='img-fluid rounded'
          alt='example'
        />
        <div style={{backgroundColor:"#1E555C"}}>
            <p className='text-center fw-bold'>Luminar Website</p>
        </div>
      </MDBRipple>
      </div>
</Col>
       <Col>
      <div className='p-2'>
      <MDBRipple rippleTag='a'>
        <img width={"300px"}
          src={image2}
          className='img-fluid rounded'
          alt='example'
        />
        <div style={{backgroundColor:"#1E555C"}}>
            <p className='text-center fw-bold'>Adventure Website</p>
        </div>
      </MDBRipple>
      </div>
</Col>
       <Col>
      <div className='p-2'>
      <MDBRipple rippleTag='a'>
        <img width={"300px"}
          src={image3}
          className='img-fluid rounded'
          alt='example'
        />
      <div style={{backgroundColor:"#1E555C"}}>
            <p className='text-center fw-bold'>Elon Musk Portfolio</p>
        </div>
      </MDBRipple>
      </div>
</Col>
</Row>
 
        </Container>
    </div>
  )
}

export default Html