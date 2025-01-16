import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import LapTimeTable from "./components/LapTimeTable";

const API_URL = "https://laptimeapp-backend.onrender.com/api";

function App() {
    const [tracks, setTracks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTracks();
    }, []);

    const fetchTracks = async () => {
        try {
            const response = await fetch(`${API_URL}/laptimes/tracks`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setTracks(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Router basename="/LapTimeApp">
            <div className="container">
                <header className="my-5 text-center">
                    <h1>Lap Time App</h1>
                </header>
                {error && <p style={{ color: "red" }}>Error: {error}</p>}
                <Routes>
                    <Route
                        path="/"
                        element={<Home tracks={tracks} />}
                    />
                    <Route path="/track/:trackName" element={<TrackDetails />} />
                </Routes>
            </div>
        </Router>

    );
}

function Home({ tracks }) {
    return (
        <div className="row">
            {tracks.length > 0 ? (
                tracks.map((track, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{track}</h5>
                                <Link
                                    to={`/track/${track}`}
                                    className="btn btn-primary"
                                >
                                    View Lap Times
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No tracks available.</p>
            )}
        </div>
    );
}

function TrackDetails() {
    const { trackName } = useParams();
    const [lapTimes, setLapTimes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchLapTimes();
    }, []);

    const fetchLapTimes = async () => {
        try {
            const response = await fetch(`${API_URL}/laptimes?track=${trackName}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setLapTimes(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <header className="my-5 text-center">
                <h2>Lap Times for {trackName}</h2>
            </header>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            <LapTimeTable lapTimes={lapTimes} />
        </div>
    );
}

export default App;
