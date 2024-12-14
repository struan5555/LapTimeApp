import React, { useState, useEffect } from "react";
import LapTimeTable from "./components/LapTimeTable";
import AddLapTimeForm from "./components/AddLapTimeForm";

const API_URL = "https://laptimeapp-backend.onrender.com/api/laptimes";

function App() {
    const [lapTimes, setLapTimes] = useState([]);
    const [error, setError] = useState(null);
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
            setFormData({
                Lap: "",
                "Total Time": "",
                Delta: "",
                "Sector 1": "",
                "Sector 2": "",
                "Sector 3": "",
                Track: "",
                Date: "",
            }); // Clear the form
        } catch (err) {
            console.error("Error adding lap time:", err);
            setError(err.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setLapTimes(lapTimes.filter((lap) => lap._id !== id)); // Remove deleted lap from state
        } catch (err) {
            console.error("Error deleting lap time:", err);
            setError(err.message);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1 className="my-5">Lap Times</h1>
                </div>
            </div>

            <div className="row">
                <div className="col text-center">
                    <button className="btn btn-primary mb-4" onClick={fetchLapTimes}>
                        Fetch Lap Times
                    </button>
                    {error && <p style={{ color: "red" }}>Error: {error}</p>}
                </div>
            </div>

            {/* Add Lap Time Section */}
            <div className="row">
                <div className="col">
                    <button
                        className="btn btn-info mb-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#addLapTimeForm"
                        aria-expanded="false"
                        aria-controls="addLapTimeForm"
                    >
                        Add Lap Time
                    </button>
                    <div className="collapse" id="addLapTimeForm">
                        <AddLapTimeForm
                            formData={formData}
                            handleInputChange={handleInputChange}
                            addLapTime={addLapTime}
                        />
                    </div>
                </div>
            </div>

            <div className="row">
                <LapTimeTable lapTimes={lapTimes} handleDelete={handleDelete} />
            </div>
        </div>
    );
}

export default App;
