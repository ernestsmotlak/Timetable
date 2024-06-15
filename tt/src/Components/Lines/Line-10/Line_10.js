import React from 'react'
import '../Line-1/Line_1.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar'
import { useMediaQuery } from 'react-responsive';


const Line_10 = () => {
  const navigate = useNavigate();

  const goToKoper = () => {
    navigate('/Linija10/Srmin');
  }

  const isMobile = useMediaQuery({ maxWidth: 375 });

  return (
    <div>
      <Navbar />

      {isMobile ? (<div className='line1-kampel mt-3 mb-4 l1'>
        <h1 className="d-flex justify-content-center display-1">Linija 10</h1>

        <div className='outer'>
          <div className="row d-flex justify-content-center">

            <div className="col-md-6">
              <div className="row" style={{ marginLeft: '16%' }}>
                <div className="col-md-12">
                  <div className="mb-3 display-6" style={{ marginLeft: '7%', fontWeight: '400', color: '#958870'}}>
                    Srmin GORC I
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <h1 className="display-4 bi bi-arrow-down l1" style={{ marginLeft: '28%', fontWeight: '400', color: '#958870'}}></h1>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3 display-6" style={{ marginLeft: '7%', fontWeight: '400', color: '#958870'}}>
                    Srmin GORC III
                  </div>
                </div>
                <div className="col-md-12" style={{ marginTop: '5%' }}>
                  <div className="mb-3" style={{ marginLeft: '27%' }}>
                    <button type="button" className="btn custom-btn" onClick={goToKoper}>
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
        <h1 className="d-flex justify-content-center display-1">Linija 10</h1>

        <div className='outer'>
          <div className="container text-center d-flex justify-content-center l1" style={{ marginLeft: '2.5%' }}>
            <div className="row w-100 mt-3 l1 ">
              <div className="col display-4 l1">
                Srmin GORC I
              </div>
              <div className="col l1" style={{ marginTop: '3.5%' }}>
                <h1 className="display-4 bi bi-arrow-right l1"></h1>
              </div>
              <div className="col display-4 l1">
                Srmin <span style={{whiteSpace: 'nowrap'}}>GORC III</span>
              </div>
              <div className="col align-self-center l1">
                <button type="button" className="btn custom-btn" onClick={goToKoper}>
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

export default Line_10;