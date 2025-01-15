import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LapTimeTable from "../components/LapTimeTable";

const API_URL = "https://laptimeapp-backend.onrender.com/api/laptimes";

function TrackDetails() {
    const { trackName } = useParams();
    const [lapTimes, setLapTimes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchLapTimes();
    }, []);

    const fetchLapTimes = async () => {
        try {
            const response = await fetch(`${API_URL}?track=${trackName}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setLapTimes(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1 className="text-center my-5">Lap Times for {trackName}</h1>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            <LapTimeTable lapTimes={lapTimes} />
        </div>
    );
}

export default TrackDetails;
