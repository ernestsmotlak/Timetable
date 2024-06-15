import React from 'react';
import '../Line-1/Line_1.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar';
import '../Line-3/Line_3.css';
import { useMediaQuery } from 'react-responsive';

const Line_3 = () => {
    const navigate = useNavigate();

    const goToBolnisnica = () => {
        navigate('/Linija3/Bolnisnica');
    }

    const goToNadDolinsko = () => {
        navigate('/Linija3/NadDolinsko');
    }

    const isMobile = useMediaQuery({ maxWidth: 375 });

    return (
        <div>
            <Navbar />

        {isMobile ? ( <div className='line1-kampel mt-3 mb-4 l1 l3'>
                <h1 className="d-flex justify-content-center display-1">Linija 3</h1>
                <div className='outer'>
                    <div className="container l3 custom display-6" style={{fontWeight: '400', color: '#958870'}}>
                        <div className="row">
                            {/* First Vertical Grid */}
                            <div className="col-md-6 l3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">Nad Dolinsko</div>
                                    </div>
                                    <div className="col-md-12 arrow l3 upper">
                                        <div className="mb-3">
                                            <h1 className="display-4 bi bi-arrow-down l1"></h1>
                                        </div>
                                    </div>
                                    <div className="col-md-12" style={{paddingLeft: '0px'}}>
                                        <div className="mb-3">Bolnišnica</div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3 l3">
                                            <button type="button" className="btn custom-btn" onClick={goToBolnisnica}>
                                                <i className="bi bi-bus-front-fill"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Second Vertical Grid */}
                            <div className="col-md-6 l3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3 l3 top-right">Bolnišnica</div>
                                    </div>
                                    <div className="col-md-12 arrow l3">
                                        <div className="mb-3 arrow-custom">
                                            <h1 className="display-4 bi bi-arrow-down l1"></h1>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">Nad Dolinsko</div>
                                    </div>
                                    <div className="col-md-12 l3 second-button">
                                        <div className="mb-3 l3">
                                            <button type="button" className="btn custom-btn" onClick={goToNadDolinsko}>
                                                <i className="bi bi-bus-front-fill"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>) : ((<div className='line1-kampel mt-3 mb-4 l1'>
                <h1 className="d-flex justify-content-center display-1">Linija 3</h1>
                <div className='outer'>
                    <div className="container text-center d-flex justify-content-center l1 l3">
                        <div className="row w-100 l1">
                            <div className="col display-4 l1 l3">
                                Nad Dolinsko
                            </div>
                            <div className="col l1">
                                <h1 className="display-4 bi bi-arrow-right l1"></h1>
                            </div>
                            <div className="col display-4 l1">
                                Bolnišnica
                            </div>
                            <div className="col align-self-center l1">
                                <button type="button" className="btn custom-btn" onClick={goToBolnisnica}>
                                    <i className="bi bi-bus-front-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="container text-center d-flex justify-content-center lower l1 l3">
                        <div className="row w-100 l1">
                            <div className="col display-4 l1">
                                Bolnišnica
                            </div>
                            <div className="col l1">
                                <h1 className="display-4 bi bi-arrow-right l1"></h1>
                            </div>
                            <div className="col display-4 l1 l3">
                                Nad Dolinsko
                            </div>
                            <div className="col align-self-center" style={{ marginBottom: '10px' }}>
                                <button type="button" className="btn custom-btn" onClick={goToNadDolinsko}>
                                    <i className="bi bi-bus-front-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>))}

        </div>
    );
};

export default Line_3;


{/* <div>Blablabla</div> */ }


