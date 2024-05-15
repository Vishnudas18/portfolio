import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'
import TrackVisibility from 'react-on-screen';
import Resume from './Resume';


function Aboutme() {
  return (
    <TrackVisibility offset={1000}>
            {({ isVisible }) =>
                <div id='aboutme'>
                    <Container className='mt-5 '>
                        <div className={isVisible ? "animate__animated animate__bounceInDown" : "visible"}>
                            <Row style={{ paddingTop: "200px" }}>

                                <Col>
                                    <div style={{ marginLeft: "230px", marginTop: "80px" }}>
                                        <div className='box2'>
                                            <div style={{ width: "200px", height: "200px", backgroundColor: "#e31707" }}>

                                            </div>
                                            <div style={{ width: "200px", height: "200px", backgroundColor: "#2D1E2F", position: "relative", bottom: "300px", left: "80px" }}>

                                            </div>
                                        </div>
                                    </div>

                                </Col>
                                <Col>
                                    <div class="" >
                                        <p class="fs-2">About Me</p>
                                        <p style={{ textAlign: "justify" }}>I am a passionate and results-driven MEARN (MongoDB, Express.js, Angular,React, Node.js) developer with a strong foundation in full-stack web development. My journey in the world of programming began with a fascination for creating interactive and dynamic web applications. Over the years, I've honed my skills and accumulated valuable experience that has allowed me to craft robust and efficient solutions.</p>
                                        <Resume/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>}
        </TrackVisibility>
  )
}

export default Aboutme