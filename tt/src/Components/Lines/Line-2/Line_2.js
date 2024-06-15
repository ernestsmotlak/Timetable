import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar';
import './Line_2.css';

const Line_2 = () => {
  const navigate = useNavigate();

  const goToKoper = () => {
    navigate('/Linija2/Koper');
  }

  const goToBolnisnica = () => {
    navigate('/Linija2/Bolnisnica');
  }

  return (
    <div>
      <Navbar />

      <div className='line1-kampel mt-3 mb-4 l2'>
        <h1 className="d-flex justify-content-center display-1">Linija 2</h1>

        <div className='outer'>
          <div className="container text-center d-flex justify-content-center l2">
            <div className="row w-75 l1">
              <div className="col display-4 l1">
                Bolnišnica
              </div>
              <div className="col l1">
                <h1 className="display-4 bi bi-arrow-right l1"></h1>
              </div>
              <div className="col display-4 l1">
                Koper
              </div>
              <div className="col align-self-center">
                <button type="button" className="btn custom-btn l2" onClick={goToBolnisnica}>
                  <i className="bi bi-bus-front-fill"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="container text-center d-flex justify-content-center lower l1">
            <div className="row w-75 l1">
              <div className="col display-4 l1" style={{marginLeft: '0px'}}>
                Koper
              </div>
              <div className="col l1">
                <h1 className="display-4 bi bi-arrow-right l1"></h1>
              </div>
              <div className="col display-4 l1">
                Bolnišnica
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

export default Line_2