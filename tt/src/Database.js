import React, { useEffect, useState } from 'react';
import './Database.css';

const Database = () => {
    const [timetableData, setTimetableData] = useState([]);

    useEffect(() => {
        // Fetch data from Express server
        fetch('http://localhost:3001/timetable')
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Check the data in the console
                setTimetableData(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []); // Empty dependency array means this effect runs once after the initial render

    if (timetableData.length === 0) {
        return <p>Loading...</p>;
    }

    // Filter data based on the condition "Station Name" is "Banka"
    const filteredData = timetableData.filter((row) => row['Station Name'] === 'Banka');

    // Include only columns from "Time1" to "Time22"
    const columnsToInclude = Object.keys(timetableData[0]).filter(
        (column) => column.startsWith('Time') && parseInt(column.slice(4)) <= 22
    );

    return (
        <div>
            <h1>App Text</h1>
            <h2>Koper Kampel Timetable</h2>
            <p>Start of table.</p>
            <div>
                <p>
                    {filteredData[0]['Station Name']}
                </p>
                <ul className="list-group">
                    {columnsToInclude.map((column, columnIndex) => (
                        <li className="list-group-item custom-ul-line1" key={columnIndex}> <i className="bi bi-clock-fill me-1"></i> {filteredData[0][column]}</li>
                    ))}
                </ul>
            </div>
            <p>End of table.</p>
        </div>
    );
};

export default Database;