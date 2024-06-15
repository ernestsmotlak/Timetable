import React, { useState, useEffect } from 'react';
import '../Line-1/Line1_Kampel.css';
import { useRef } from 'react';
import Navbar from '../../Navbar';
import { useMediaQuery } from 'react-responsive';

const Line4_Partizanska = () => {
    const [selectVhod, setSelectedVhod] = useState('');
    const [selectIzhod, setSelectedIzhod] = useState('');
    const [printVhod, setPrintVhod] = useState('');
    const [printIzhod, setPrintIzhod] = useState('');
    const ref = useRef(null);

    const [serverResponse, setServerResponse] = useState('Loading data from the server...');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://84.247.184.37:3001/Linija4/Partizanska');
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

    const print_Vhod = (event) => {
        const printVhod = event.target.options[event.target.selectedIndex].text;
        setPrintVhod(printVhod);
    };

    const print_Izhod = (event) => {
        const printIzhod = event.target.options[event.target.selectedIndex].text;
        setPrintIzhod(printIzhod);
    };

    const handleIzhod = (event) => {
        const selectedIzhod = event.target.value;
        setSelectedIzhod(selectedIzhod);
        scrollToRef(100);
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

    const isMobile = useMediaQuery({ maxWidth: 375 });

    return (
        <div>
            <Navbar />
            <div className='line1-kampel mt-3 mb-4'>
                <h1 className="d-flex justify-content-center display-1">Linija 4</h1>

                {isMobile ? (<div className="col-md-6">
                    <div className="row" style={{ marginLeft: '25%' }}>
                        <div className="col-md-12">
                            <div className="mb-3 display-6" style={{fontWeight: '400', color: 'rgb(149, 136, 112)'}}>Partizanska</div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <div className="mb-3">
                                    <h1 className="display-4 bi bi-arrow-down l1" style={{ marginLeft: '20%' }}></h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3 display-6" style={{fontWeight: '400', color: 'rgb(149, 136, 112)'}}>Partizanska</div>
                        </div>
                    </div>
                </div>) : (<div className="container text-center d-flex justify-content-center l1 l3" style={{ marginLeft: '0px' }}>
                    <div className="row w-100 l1" style={{ marginTop: '0px' }}>
                        <div className="col display-4 l1 l3" style={{fontWeight: '400', color: 'rgb(149, 136, 112)'}}>
                            Partizanska
                        </div>
                        <div className="col l1">
                            <h1 className="display-4 bi bi-arrow-right l1"></h1>
                        </div>
                        <div className="col display-4 l1" style={{fontWeight: '400', color: 'rgb(149, 136, 112)'}}>
                            Partizanska
                        </div>
                    </div>
                </div>)}

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
                                <option value='Partizanska1'>Partizanska</option>
                                <option value='Šalara1'>Šalara</option>
                                <option value='Mercator1'>Mercator</option>
                                <option value='Olmo1'>Olmo</option>
                                <option value='Olmo_K1'>Olmo K</option>
                                <option value='Tomšičeva_K1'>Tomšičeva K1</option>
                                <option value='Tomšičeva1'>Tomšičeva</option>
                                <option value='Pasarela1'>Pasarela</option>
                                <option value='Zeleni_park1'>Zeleni park</option>
                                <option value='Tržnica1.1'>Tržnica</option>
                                <option value='Tržnica1.2'>Tržnica</option>
                                <option value='Semedela_tunel1'>Semedela tunel</option>
                                <option value='Žusterna'>Žusterna</option>
                                <option value='Semedela_tunel'>Semedela tunel</option>
                                <option value='Zeleni_park'>Zeleni park</option>
                                <option value='Tržnica2.1'>Tržnica</option>
                                <option value='Tržnica2.2'>Tržnica</option>
                                <option value='Mandrač'>Mandrač</option>
                                <option value='Pasarela'>Pasarela</option>
                                <option value='Tomšičeva'>Tomšičeva</option>
                                <option value='Tomšičeva_K'>Tomšičeva K</option>
                                <option value='Olmo_K'>Olmo K</option>
                                <option value='Olmo'>Olmo</option>
                                <option value='Mercator'>Mercator</option>
                                <option value='Šalara'>Šalara</option>
                                <option value='Partizanska'>Partizanska</option>
                            </select>

                        </div>
                        <div className="col custom-div-l1-Kampel" onChange={(event) => { handleIzhod(event); print_Izhod(event); }} ref={ref}>
                            <select className="form-select" aria-label="Default select example">
                            <option defaultValue>Izberite postajo</option>
                                <option value='Partizanska1'>Partizanska</option>
                                <option value='Šalara1'>Šalara</option>
                                <option value='Mercator1'>Mercator</option>
                                <option value='Olmo1'>Olmo</option>
                                <option value='Olmo_K1'>Olmo K</option>
                                <option value='Tomšičeva_K1'>Tomšičeva K1</option>
                                <option value='Tomšičeva1'>Tomšičeva</option>
                                <option value='Pasarela1'>Pasarela</option>
                                <option value='Zeleni_park1'>Zeleni park</option>
                                <option value='Tržnica1.1'>Tržnica</option>
                                <option value='Tržnica1.2'>Tržnica</option>
                                <option value='Semedela_tunel1'>Semedela tunel</option>
                                <option value='Žusterna'>Žusterna</option>
                                <option value='Semedela_tunel'>Semedela tunel</option>
                                <option value='Zeleni_park'>Zeleni park</option>
                                <option value='Tržnica2.1'>Tržnica</option>
                                <option value='Tržnica2.2'>Tržnica</option>
                                <option value='Mandrač'>Mandrač</option>
                                <option value='Pasarela'>Pasarela</option>
                                <option value='Tomšičeva'>Tomšičeva</option>
                                <option value='Tomšičeva_K'>Tomšičeva K</option>
                                <option value='Olmo_K'>Olmo K</option>
                                <option value='Olmo'>Olmo</option>
                                <option value='Mercator'>Mercator</option>
                                <option value='Šalara'>Šalara</option>
                                <option value='Partizanska'>Partizanska</option>
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

export default Line4_Partizanska;
