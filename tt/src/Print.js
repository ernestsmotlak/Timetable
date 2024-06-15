import React, { useState, useEffect } from 'react';

const Print = () => {
  const [serverResponse, setServerResponse] = useState('Loading data from the server...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/Linija1/kampel');
        const data = await response.json(); // Use json() to parse JSON response
        setServerResponse(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setServerResponse('Error fetching data');
      }
    };

    fetchData();
  }, []);

  const renderScheduleList = () => {
    // Check if serverResponse is an object
    if (typeof serverResponse === 'object' && serverResponse !== null) {
      const items = Object.entries(serverResponse).map(([station, schedule]) => (
        <li key={station}>
          <strong>{station}:</strong> {schedule.join(', ')}
        </li>
      ));

      return <ul>{items}</ul>;
    }

    return null;
  };

  return (
    <div>
      <h2>Server Response:</h2>
      {renderScheduleList()}
    </div>
  );
};

export default Print;
