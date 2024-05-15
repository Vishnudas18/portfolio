import React from 'react'
import TrackVisibility from 'react-on-screen';
import '../Components/skill.css'
function Skills() {
    return (
        <div id='skills' className='mt-5'>
            <div className="container pt-5">
            <h2 className='text-center mt-3'>Skills</h2>
                <TrackVisibility once>
                {({isVisible})=>
                <div className="row pt-5">
                <div className="col-3">
                    <div className={isVisible?"animate__animated animate__fadeInLeft":""}>
                        <div style={{ width: "230px", height: "230px", backgroundColor: "#FF4B00" }}>

                        </div>
                        <div className='text-center bg-light' style={{ width: "230px", height: "230px", backgroundColor: "white", position: "relative", bottom: "170px", left: "70px" }}>
                            <img className='pb-1 pt-1' width={"200px"} src="https://i.postimg.cc/0y0nbtxK/html-1051277.png" alt="" />
                            <div style={{backgroundColor:"#FF4B00" }} className='bg- p-1'>
                                <p className='text-dark align-items-center fw-bold'>HTML</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className={isVisible?"animate__animated animate__fadeInLeft":""}>
                        <div style={{ width: "230px", height: "230px", backgroundColor: "#2196F3" }}>

                        </div>
                        <div className='text-center bg-light' style={{ width: "230px", height: "230px", backgroundColor: "white", position: "relative", bottom: "170px", left: "70px" }}>
                            <img className='pb-1 pt-1' width={"200px"} src="https://i.postimg.cc/BQDMGSVg/css-3-732190.png" alt="" />
                            <div style={{backgroundColor: "#2196F3"  }} className='bg- p-1'>
                                <p className='text-dark align-items-center fw-bold'>CSS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className={isVisible?"animate__animated animate__fadeInLeft":""}>
                        <div style={{ width: "230px", height: "230px", backgroundColor: "#810AFA" }}>

                        </div>
                        <div className='text-center bg-light' style={{ width: "230px", height: "230px", backgroundColor: "white", position: "relative", bottom: "170px", left: "70px" }}>
                            <img className='pb-5 pt-1' width={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="" />
                            <div style={{backgroundColor:"#810AFA"  }} className='bg- p-1'>
                                <p className='text-dark align-items-center fw-bold'>BOOTSTRAP</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className={isVisible?"animate__animated animate__fadeInLeft":""}>
                        <div style={{ width: "230px", height: "230px", backgroundColor: "#FFDF00" }}>

                        </div>
                        <div className='text-center bg-light' style={{ width: "230px", height: "230px", backgroundColor: "white", position: "relative", bottom: "170px", left: "70px" }}>
                            <img className='pb-1 pt-1' width={"200px"} src="https://i.postimg.cc/qvTQBffd/js-5968292.png" alt="" />
                            <div style={{backgroundColor:"#FFDF00" }} className='bg- p-1'>
                                <p className='text-dark align-items-center fw-bold'>JAVASCRIPT</p>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
                }
                </TrackVisibility>
                    <TrackVisibility once>
                    {({isVisible})=>
                <div className="row">
                    <div className="col-3">
                    <div className={isVisible?"animate__animated animate__fadeInLeft":""}>
                            <div style={{ width: "230px", height: "230px", backgroundColor: "#007FFF" }}>

                            </div>
                            <div className='text-center bg-light' style={{ width: "230px", height: "230px", backgroundColor: "white", position: "relative", bottom: "170px", left: "70px" }}>
                                <img className='pb-1 pt-1' width={"200px"} src="https://mui.com/static/logo.png" alt="" />
                                <div style={{backgroundColor:"#007FFF" }} className='bg- p-1'>
                                    <p className='text-dark align-items-center fw-bold'>Material Ui</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-3">
                    <div className={isVisible?"animate__animated animate__fadeInLeft":""}>
                            <div style={{ width: "230px", height: "230px", backgroundColor: "#53C1DE" }}>

                            </div>
                            <div className='text-center bg-light' style={{ width: "230px", height: "230px", backgroundColor: "white", position: "relative", bottom: "170px", left: "70px" }}>
                                <img className='pb-4 pt-1' width={"200px"} src="https://i.postimg.cc/PfCS2zb0/584830f5cef1014c0b5e4aa1.png" alt="" />
                                <div style={{backgroundColor:"#53C1DE" }} className='bg- p-1'>
                                    <p className='text-dark align-items-center fw-bold'>REACT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>}
                </TrackVisibility>
            </div>
        </div>
    )
}

export default Skills