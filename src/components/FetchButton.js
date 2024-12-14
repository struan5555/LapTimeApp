import React from "react";

function FetchButton({ fetchLapTimes, error }) {
    return (
        <div className="col text-center">
            <button className="btn btn-primary mb-4" onClick={fetchLapTimes}>
                Fetch Lap Times
            </button>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
        </div>
    );
}

export default FetchButton;
