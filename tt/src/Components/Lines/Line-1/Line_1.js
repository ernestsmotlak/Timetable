import React from 'react'
import './Line_1.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar'


const Line_1 = () => {
  const navigate = useNavigate();

  const goToKampel = () => {
    navigate('/Linija1/Kampel');
  }

  const goToKoper = () => {
    navigate('/Linija1/Koper');
  }

  return (
    <div>
      <Navbar />

      <div className='line1-kampel mt-3 mb-4 l1'>
        <h1 className="d-flex justify-content-center display-1">Linija 1</h1>

        <div className='outer'>
          <div className="container text-center d-flex justify-content-center l1">
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
                <button type="button" className="btn custom-btn" onClick={goToKampel}>
                  <i className="bi bi-bus-front-fill"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="container text-center d-flex justify-content-center lower l1">
            <div className="row w-75 l1">
              <div className="col display-4 l1">
                Kampel
              </div>
              <div className="col l1">
                <h1 className="display-4 bi bi-arrow-right l1"></h1>
              </div>
              <div className="col display-4 l1">
                Koper
              </div>
              <div className="col align-self-center" style={{marginBottom: '10px'}}>
                <button type="button" className="btn custom-btn" onClick={goToKoper}>
                  <i className="bi bi-bus-front-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
};

export default Line_1