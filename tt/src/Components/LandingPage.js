import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './LandingPage.css';
import { useMediaQuery } from 'react-responsive';

const LandingPage = () => {
  const [selectedLine, setSelectedLine] = useState('');

  const navigate = useNavigate();

  const handleLineChange = (event) => {
    setSelectedLine(event.target.value);
    // renderComponent();
  }

  useEffect(() => {
    switch (selectedLine) {
      case 'Line_1':
        navigate('/Linija1');
        break;
      case 'Line_2':
        navigate('/Linija2');
        break;
      case 'Line_2A':
        navigate('/Linija2A');
        break;
      case 'Line_3':
        navigate('/Linija3');
        break;
      case 'Line_4':
        navigate('/Linija4')
        break;
      case 'Line_5':
        navigate('/Linija5');
        break;
      case 'Line_6':
        navigate('/Linija6');
        break;
      case 'Line_7':
        navigate('/Linija7');
        break;
      case 'Line_8':
        navigate('/Linija8');
        break;
      case 'Line_9':
        navigate('/Linija9');
        break;
      case 'Line_10':
        navigate('/Linija10');
        break;
      case 'Line_11':
        navigate('/Linija11');
        break;
      case 'Line_12':
        navigate('/Linija12');
        break;

    }
  }, [selectedLine, navigate]);

  const isMobile = useMediaQuery({ maxWidth: 375 });


  return (
    <div className='landingPage'>
      <Navbar />

      {isMobile ? (
        <div className='selectLandingPage'> <br />
          <span className='spanLandingPage'>Izberite željeno linijo: </span> <br />
          <select className="form-select form-select-lg mb-17 w-50 border border-black mt-3 ms-5"
            aria-label="Large select example"
            onChange={handleLineChange}
            value={selectedLine}
          >

            <option defaultValue>Izberite linijo.</option>
            <option value="Line_1">Linija 1</option>
            <option value="Line_2">Linija 2</option>
            <option value="Line_2A">Linija 2A</option>
            <option value="Line_3">Linija 3</option>
            <option value="Line_4">Linija 4</option>
            <option value="Line_5">Linija 5</option>
            <option value="Line_6">Linija 6</option>
            <option value="Line_7">Linija 7</option>
            <option value="Line_8">Linija 8</option>
            <option value="Line_9">Linija 9</option>
            <option value="Line_10">Linija 10</option>
            <option value="Line_11">Linija 11</option>
            <option value="Line_12">Linija 12</option>
          </select>
        </div>) : (

        <div className='selectLandingPage'> <br />
          <span className='spanLandingPage'>Izberite željeno linijo: </span> <br />
          <select className="form-select form-select-lg mb-17 w-25 border border-black mt-3"
            aria-label="Large select example"
            onChange={handleLineChange}
            value={selectedLine}
          >

            <option defaultValue>Izberite linijo.</option>
            <option value="Line_1">Linija 1</option>
            <option value="Line_2">Linija 2</option>
            <option value="Line_2A">Linija 2A</option>
            <option value="Line_3">Linija 3</option>
            <option value="Line_4">Linija 4</option>
            <option value="Line_5">Linija 5</option>
            <option value="Line_6">Linija 6</option>
            <option value="Line_7">Linija 7</option>
            <option value="Line_8">Linija 8</option>
            <option value="Line_9">Linija 9</option>
            <option value="Line_10">Linija 10</option>
            <option value="Line_11">Linija 11</option>
            <option value="Line_12">Linija 12</option>
          </select>
        </div>)}

    </div>
  )
}

export default LandingPage