import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TrackDetails from "./pages/TrackDetails";

const API_URL =
    process.env.REACT_APP_API_URL || "http://localhost:5000/api/laptimes";

function App() {
    return (
        <Router>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/track/:trackName" element={<TrackDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
