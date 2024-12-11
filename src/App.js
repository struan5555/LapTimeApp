import React, { useState, useEffect } from 'react';

const API_URL = "https://laptimeapp-backend.onrender.com/api/laptimes";

function App() {
    const [lapTimes, setLapTimes] = useState([]);
    const [error, setError] = useState(null);

    // Fetch lap times on component load
    useEffect(() => {
        fetchLapTimes();
    }, []);

    const fetchLapTimes = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setLapTimes(data);
        } catch (err) {
            console.error("Error fetching lap times:", err);
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Lap Times</h1>
            <button onClick={fetchLapTimes}>Fetch Lap Times</button>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            <ul>
                {lapTimes.map((lap, index) => (
                    <li key={index}>
                        {lap.driver} - {lap.track} - {lap.lapTime}s
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
