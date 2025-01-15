import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5000/api/laptimes/tracks";

function Home() {
    const [tracks, setTracks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTracks();
    }, []);

    const fetchTracks = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data); // Check if "Knockhill" or other tracks appear here
            setTracks(data);

            setTracks(data);
        } catch (err) {
            setError(err.message);
        }
    };    

    return (
        <div>
            <h1 className="text-center my-5">Tracks</h1>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            <div className="row">
                {tracks.map((track, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{track}</h5>
                                <Link to={`/track/${track}`} className="btn btn-primary">
                                    View Lap Times
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Home;
