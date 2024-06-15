import React from 'react'
import Navbar from '../../Navbar'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './Line2_Koper.css';

const Line2_Koper = () => {
    const [selectVhod, setSelectedVhod] = useState('');
    const [selectIzhod, setSelectedIzhod] = useState('');
    const [printVhod, setPrintVhod] = useState('');
    const [printIzhod, setPrintIzhod] = useState('');
    const ref = useRef(null);

    const [serverResponse, setServerResponse] = useState('Loading data from the server...');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://84.247.184.37:3001/Linija2/Koper');
                const data = await response.json(); // Use json() to parse JSON response
                setServerResponse(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setServerResponse('Error fetching data');
            }
        };

        fetchData();
    }, []);

    const handleVhod = (event) => {
        const selectedVhod = event.target.value;
        setSelectedVhod(selectedVhod);
    };

    const handleIzhod = (event) => {
        const selectedIzhod = event.target.value;
        setSelectedIzhod(selectedIzhod);
        scrollToRef(100);
    };

    const print_Vhod = (event) => {
        const printVhod = event.target.options[event.target.selectedIndex].text;
        setPrintVhod(printVhod);
    };

    const print_Izhod = (event) => {
        const printIzhod = event.target.options[event.target.selectedIndex].text;
        setPrintIzhod(printIzhod);
    };

    const scrollToRef = (offset = 100) => {
        const targetPosition = ref.current?.offsetTop;
        if (targetPosition !== undefined) {
            window.scroll({
                top: targetPosition + offset,
                behavior: 'smooth'
            });
        }
    };

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const startIndex = (station) => {
        const third = Math.floor(serverResponse[station].length / 3);
        if (currentTime < '10:00') {
            return 0;
        } else if (currentTime >= '10:00' && currentTime <= '16:00') {
            return third;
        } else {
            return 2 * third;
        }
    };

    const endIndex = (station) => {
        const third = Math.floor(serverResponse[station].length / 3);
        if (currentTime < '10:00') {
            return third;
        } else if (currentTime >= '10:00' && currentTime <= '16:00') {
            return 2 * third;
        } else {
            return serverResponse[station].length;
        }
    };

    return (
        <div>
            <Navbar />
            <div className='line1-kampel mt-3 mb-4'>
                <h1 className="d-flex justify-content-center display-1">Linija 2</h1>

                <div className="container text-center d-flex justify-content-center">
                    <div className="row custom">
                        <div className="col display-4 l2">Bolnišnica</div>
                        <div className="col l2">
                            <h1 className="display-4 bi bi-arrow-right"></h1>
                        </div>
                        <div className="col display-4 l2 lower">Koper</div>
                    </div>
                </div>

                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col display-6 text-truncate">Vhodna postaja</div>
                        <div className="col display-6 custom-div-l1-Kampel">Izhodna postaja</div>
                    </div>
                </div>

                <div className="container d-flex justify-content-center mt-3">
                    <div className="row">
                        <div className="col text-truncate">
                            <select className="form-select" aria-label="Default select example" onChange={(event) => { handleVhod(event); print_Vhod(event); }}>
                                <option defaultValue>Izberite postajo</option>
                                <option value='Bolnišnica'>Bolnišnica</option>
                                <option value='Kvedrova'>Kvedrova</option>
                                <option value='Markovec-Center_Za_gradom'>Markovec Center Za Gradom</option>
                                <option value='Beblerjeva'>Beblerjeva</option>
                                <option value='Kozlovičeva'>Kozlovičeva</option>
                                <option value='Markovec'>Markovec</option>
                                <option value='Klaričeva'>Klaričeva</option>
                                <option value='Semedelski_razgledi'>Semedelski razgledi</option>
                                <option value='Prisoje'>Prisoje</option>
                                <option value='Tomšičeva_K'>Tomšičeva K</option>
                                <option value='Tomšičeva'>Tomšičeva</option>
                                <option value='Pasarela'>Pasarela</option>
                                <option value='Zeleni_park'>Zeleni park</option>
                                <option value='Banka'>Banka</option>
                                <option value='Luka'>Luka</option>
                                <option value='PH_Sonce'>PH Sonce</option>
                                <option value='Supernova'>Supernova</option>
                                <option value='Koper'>Koper</option>
                            </select>

                        </div>
                        <div className="col custom-div-l1-Kampel" onChange={(event) => { handleIzhod(event); print_Izhod(event); }} ref={ref}>
                            <select className="form-select" aria-label="Default select example">
                                <option defaultValue>Izberite postajo</option>
                                <option value='Bolnišnica'>Bolnišnica</option>
                                <option value='Kvedrova'>Kvedrova</option>
                                <option value='Markovec-Center_Za_gradom'>Markovec Center Za Gradom</option>
                                <option value='Beblerjeva'>Beblerjeva</option>
                                <option value='Kozlovičeva'>Kozlovičeva</option>
                                <option value='Markovec'>Markovec</option>
                                <option value='Klaričeva'>Klaričeva</option>
                                <option value='Semedelski_razgledi'>Semedelski razgledi</option>
                                <option value='Prisoje'>Prisoje</option>
                                <option value='Tomšičeva_K'>Tomšičeva K</option>
                                <option value='Tomšičeva'>Tomšičeva</option>
                                <option value='Pasarela'>Pasarela</option>
                                <option value='Zeleni_park'>Zeleni park</option>
                                <option value='Banka'>Banka</option>
                                <option value='Luka'>Luka</option>
                                <option value='PH_Sonce'>PH Sonce</option>
                                <option value='Supernova'>Supernova</option>
                                <option value='Koper'>Koper</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* const quarter = Math.floor(serverResponse[selectVhod].length / 4);
            {serverResponse[selectVhod].slice(0, quarter).map((time, timeIndex)
            {serverResponse[selectVhod].slice(quarter, 2 * quarter).map((time, timeIndex)
            {serverResponse[selectVhod].slice(2 * quarter, 3 * quarter).map((time, timeIndex)
            {serverResponse[selectVhod].slice(3 * quarter, serverResponse[selectVhod] - 1).map((time, timeIndex)
        
  
          aaa */}
                {/* Display selected station data */}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {selectVhod && (
                                <div>
                                    <h2 className="text-end me-3">{printVhod}</h2>
                                    {serverResponse[selectVhod] && (
                                        <ul className="list-group ms-auto custom">
                                            {serverResponse[selectVhod].slice(startIndex(selectVhod), endIndex(selectVhod)).map((time, timeIndex) => (
                                                <li className="list-group-item custom-il-line1" key={timeIndex}>
                                                    <i className="bi bi-clock-fill me-1"></i> {time}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="col">
                            {selectIzhod && (
                                <div>
                                    <h2 className="text-start ms-3">{printIzhod}</h2>
                                    {serverResponse[selectIzhod] && (
                                        <ul className="list-group mb-5 custom">
                                            {serverResponse[selectIzhod].slice(startIndex(selectIzhod), endIndex(selectIzhod)).map((time, timeIndex) => (
                                                <li className="list-group-item custom-il-line1" key={timeIndex}>
                                                    <i className="bi bi-clock-fill me-1"></i> {time}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Line2_Koper