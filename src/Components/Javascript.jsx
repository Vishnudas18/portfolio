import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBRipple } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import image1 from '../images/Screenshot 2024-01-27 214958.png'
import image2 from '../images/Screenshot 2024-01-27 215116.png'
import image3 from '../images/Screenshot 2024-02-01 100304.png'
import image4 from '../images/Screenshot 2024-02-01 100033.png'
import image5 from '../images/Screenshot 2024-02-01 100111.png'
import image6 from '../images/Screenshot 2024-02-01 100722.png'


function Javascript() {
  return (
    <div  style={{paddingRight:"150px",paddingLeft:"150px"}}>
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
            <p className='text-center fw-bold'>Cart Website</p>
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
            <p className='text-center fw-bold'>Bank Website</p>
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
            <p className='text-center fw-bold'>BMI Website</p>
        </div>
      </MDBRipple>
      </div>
</Col>
</Row>
    <Row className='mx-5'>
       <Col>
      <div className='p-2'>
      <MDBRipple rippleTag='a'>
        <img width={"300px"}
          src={image4}
          className='img-fluid rounded'
          alt='example'
        />
       <div style={{backgroundColor:"#1E555C"}}>
            <p className='text-center fw-bold'>Car World Website</p>
        </div>
      </MDBRipple>
      </div>
     </Col>
       <Col>
      <div className='p-2'>
      <MDBRipple rippleTag='a'>
        <img width={"300px"}
          src={image5}
          className='img-fluid rounded'
          alt='example'
        />
      <div style={{backgroundColor:"#1E555C"}}>
            <p className='text-center fw-bold'>User Website</p>
        </div>
      </MDBRipple>
      </div>
</Col>
       <Col>
      <div className='p-2'>
      <MDBRipple rippleTag='a'>
        <img width={"300px"}
          src={image6}
          className='img-fluid rounded'
          alt='example'
        />
       <div style={{backgroundColor:"#1E555C"}}>
            <p className='text-center fw-bold'>Mov Website</p>
        </div>
      </MDBRipple>
      </div>
</Col>
</Row>
        </Container>
    </div>
  )
}

export default Javascript