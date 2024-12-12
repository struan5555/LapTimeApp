import React, { useState, useEffect } from "react";

const API_URL = "https://laptimeapp-backend.onrender.com/api/laptimes";

function App() {
    const [lapTimes, setLapTimes] = useState([]);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        driver: "",
        track: "",
        lapTime: ""
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const addLapTime = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const newLap = await response.json();
            setLapTimes([...lapTimes, newLap]); // Update the table with the new lap time
            setFormData({ driver: "", track: "", lapTime: "" }); // Clear the form
        } catch (err) {
            console.error("Error adding lap time:", err);
            setError(err.message);
        }
    };

    return (
        <div className="container">
            {/* Header */}
            <div className="row">
                <div className="col text-center">
                    <h1 className="my-5">Lap Times</h1>
                </div>
            </div>

            {/* Fetch Lap Times Button */}
            <div className="row">
                <div className="col text-center">
                    <button className="btn btn-primary mb-4" onClick={fetchLapTimes}>
                        Fetch Lap Times
                    </button>
                    {error && <p style={{ color: "red" }}>Error: {error}</p>}
                </div>
            </div>

            {/* Add Lap Time Form */}
            <div className="row">
                <div className="col">
                    <form onSubmit={addLapTime} className="mb-5">
                        <h2>Add Lap Time</h2>
                        <div className="mb-3">
                            <label className="form-label">Driver</label>
                            <input
                                type="text"
                                name="driver"
                                className="form-control"
                                value={formData.driver}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Track</label>
                            <input
                                type="text"
                                name="track"
                                className="form-control"
                                value={formData.track}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Lap Time (s)</label>
                            <input
                                type="number"
                                name="lapTime"
                                className="form-control"
                                value={formData.lapTime}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success">
                            Add Lap Time
                        </button>
                    </form>
                </div>
            </div>

            {/* Render Table */}
            <div className="row">
                <div className="col">
                    {lapTimes.length > 0 ? (
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Driver</th>
                                    <th scope="col">Track</th>
                                    <th scope="col">Lap Time (s)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lapTimes.map((lap, index) => (
                                    <tr key={index}>
                                        <td>{lap.driver}</td>
                                        <td>{lap.track}</td>
                                        <td>{lap.lapTime}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No lap times to display</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
