import React, { useEffect, useState } from "react";
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import LapTimeTable from "./components/LapTimeTable";
import AddLapTimeForm from "./components/AddLapTimeForm";

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
                    <div class="row">

                        <div class="col-9">
                            <h1>Lap Time App</h1>
                        </div>

                        <div class="col-3">
                            <div className="text-center mb-5">
                                <Link to="/add-lap" className="btn btn-success btn-lg">
                                    ➕ Add Lap Time
                                </Link>
                            </div>
                        </div>
                    </div>

                </header>
                {error && <p style={{ color: "red" }}>Error: {error}</p>}
                <Routes>

                    <Route path="/" element={<Home tracks={tracks} />} />
                    <Route path="/track/:trackName" element={<TrackDetails />} />
                    <Route path="/add-lap" element={<AddLapTimePage />} />

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
                <div class="row">
                    <div class="col-3">
                         <Link to="/" className="btn btn-secondary mb-3">
                            ← Back to Tracks
                        </Link>
                    </div>

                    <div class="col-6">
                        <h2>Lap Times for {trackName}</h2>
                    </div>

                    <div class="col-3">
                        <Link to="" className="btn btn-success mb-3 ms-2">
                            🔍 Sort Button
                        </Link>
                    </div>

                </div>

            </header>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            <LapTimeTable lapTimes={lapTimes} />
        </div>
    );
}

function AddLapTimePage() {
    const [formData, setFormData] = useState({
        Lap: "",
        "Total Time": "",
        Delta: "",
        "Sector 1": "",
        "Sector 2": "",
        "Sector 3": "",
        Track: "",
        Date: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const addLapTime = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/laptimes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            alert("Lap time added successfully!");
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    return (
        <div className="container mt-5">
            <Link to="/" className="btn btn-secondary mb-3">
                ← Back to Tracks
            </Link>
            <h2 className="mb-4 text-center">➕ Add Lap Time</h2>
            <AddLapTimeForm
                formData={formData}
                handleInputChange={handleInputChange}
                addLapTime={addLapTime}
            />
        </div>
    );
}


export default App;
