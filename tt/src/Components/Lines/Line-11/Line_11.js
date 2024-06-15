import React from 'react';
import '../Line-1/Line_1.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar';
import '../Line-3/Line_3.css';
import { useMediaQuery } from 'react-responsive';

const Line_11 = () => {
  const navigate = useNavigate();

  const goToBanka = () => {
    navigate('/Linija11/Banka');
  }

  const goToCimos = () => {
    navigate('/Linija11/Cimos');
  }

  const isMobile = useMediaQuery({ maxWidth: 375 });

  return (
    <div>
      <Navbar />

      {isMobile ? (<div className='line1-kampel mt-3 mb-4 l1 l3'>
        <h1 className="d-flex justify-content-center display-1">Linija 11</h1>
        <div className='outer'>
          <div className="container l3 custom">
            <div className="row">
              {/* First Vertical Grid */}
              <div className="col-md-6 l3">
                <div className="row display-6" style={{ color: '#958870', fontWeight: '400' }}>
                  <div className="col-md-12">
                    <div className="mb-3" style={{ marginLeft: '-12%' }}>Cimos P&R</div>
                  </div>
                  <div className="col-md-12 arrow l3 upper">
                    <div className="mb-3">
                      <h1 className="display-4 bi bi-arrow-down l1"></h1>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3 ms-2">Banka</div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3 l3">
                      <button type="button" className="btn custom-btn" onClick={goToBanka} style={{ marginTop: '2%' }}>
                        <i className="bi bi-bus-front-fill"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Vertical Grid */}
              <div className="col-md-6 l3">
                <div className="row display-6" style={{ color: '#958870', fontWeight: '400' }}>
                  <div className="col-md-12">
                    <div className="mb-3 l3 top-right" style={{ marginLeft: '12%' }}>Banka</div>
                  </div>
                  <div className="col-md-12 arrow l3">
                    <div className="mb-3 arrow-custom">
                      <h1 className="display-4 bi bi-arrow-down l1"></h1>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3" style={{ marginLeft: '-10%' }}>Cimos P&R</div>
                  </div>
                  <div className="col-md-12 l3 second-button">
                    <div className="mb-3 l3" style={{marginLeft: '18%'}}>
                      <button type="button" className="btn custom-btn" onClick={goToCimos}>
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
        <h1 className="d-flex justify-content-center display-1">Linija 11</h1>
        <div className='outer'>
          <div className="container text-center d-flex justify-content-center l1 l3">
            <div className="row w-100 l1">
              <div className="col display-4 l1 l3">
                Cimos P&R
              </div>
              <div className="col l1" style={{ marginTop: '0%' }}>
                <h1 className="display-4 bi bi-arrow-right l1"></h1>
              </div>
              <div className="col display-4 l1">
                Banka
              </div>
              <div className="col align-self-center l1">
                <button type="button" className="btn custom-btn" onClick={goToBanka}>
                  <i className="bi bi-bus-front-fill"></i>
                  </button>
              </div>
            </div>
          </div>

          <div className="container text-center d-flex justify-content-center lower l1 l3">
            <div className="row w-100 l1">
              <div className="col display-4 l1">
                Banka
              </div>
              <div className="col l1" style={{ marginTop: '0%' }}>
                <h1 className="display-4 bi bi-arrow-right l1"></h1>
              </div>
              <div className="col display-4 l1 l3">
                Cimos P&R
              </div>
              <div className="col align-self-center" style={{ marginBottom: '10px'}}>
                <button type="button" className="btn custom-btn" onClick={goToCimos}>
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

export default Line_11;