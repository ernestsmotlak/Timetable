import React from 'react'
import '../Line-1/Line_1.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar'
import { useMediaQuery } from 'react-responsive';


const Line_4 = () => {
    const navigate = useNavigate();

    const goToPartizanska = () => {
        navigate('/Linija4/Partizanska');
    }

    const isMobile = useMediaQuery({ maxWidth: 375 });

    return (
        <div>
            <Navbar />

            {isMobile ? (<div className='line1-kampel mt-3 mb-4 l1'>
                <h1 className="d-flex justify-content-center display-1">Linija 4</h1>

                <div className='outer'>
                    <div className="row d-flex justify-content-center">

                        <div className="col-md-6">
                            <div className="row" style={{marginLeft: '27%'}}>
                                <div className="col-md-12">
                                    <div className="mb-3 display-6" style={{fontWeight: '400', color: 'rgb(149, 136, 112)'}}>Partizanska</div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <h1 className="display-4 bi bi-arrow-down l1" style={{marginLeft: '20%'}}></h1>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3 display-6" style={{fontWeight: '400', color: 'rgb(149, 136, 112)'}}>Partizanska</div>
                                </div>
                                <div className="col-md-12" style={{marginTop: '5%'}}>
                                    <div className="mb-3" style={{marginLeft: '19%'}}>
                                        <button type="button" className="btn custom-btn" onClick={goToPartizanska}>
                                            <i className="bi bi-bus-front-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>) : (<div className='line1-kampel mt-3 mb-4 l1'>
                <h1 className="d-flex justify-content-center display-1">Linija 1</h1>

                <div className='outer'>
                    <div className="container text-center d-flex justify-content-center l1" style={{ marginLeft: '2.5%' }}>
                        <div className="row w-100 mt-3 l1 ">
                            <div className="col display-4 l1" style={{fontWeight: '400', color: 'rgb(149, 136, 112)'}}>
                                Partizanska
                            </div>
                            <div className="col l1">
                                <h1 className="display-4 bi bi-arrow-right l1"></h1>
                            </div>
                            <div className="col display-4 l1" style={{fontWeight: '400', color: 'rgb(149, 136, 112)'}}>
                                Partizanska
                            </div>
                            <div className="col align-self-center l1">
                                <button type="button" className="btn custom-btn" onClick={goToPartizanska}>
                                    <i className="bi bi-bus-front-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>)}
        </div>
    )
};

export default Line_4

{/* <div className='line1-kampel mt-3 mb-4 l1'>
                <h1 className="d-flex justify-content-center display-1">Linija 1</h1>

                <div className='outer'>
                    <div className="container text-center d-flex justify-content-center l1" style={{marginLeft: '2.5%'}}>
                        <div className="row w-75 l1">
                            <div className="col display-4 l1">
                                Koper
                            </div>
                            <div className="col l1">
                                <h1 className="display-4 bi bi-arrow-right l1"></h1>
                            </div>
                            <div className="col display-4 l1">
                                Kampel
                            </div>
                            <div className="col align-self-center l1">
                                <button type="button" className="btn custom-btn" onClick={goToPartizanska}>
                                    <i className="bi bi-bus-front-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </div>
            </div> */}