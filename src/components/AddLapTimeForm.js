import React from "react";

function AddLapTimeForm({ formData, handleInputChange, addLapTime }) {
    return (
        <form onSubmit={addLapTime} className="mb-5">
            <div className="mb-3">
                <label className="form-label">Lap</label>
                <input
                    type="number"
                    name="Lap"
                    className="form-control"
                    value={formData.Lap}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Total Time</label>
                <input
                    type="text"
                    name="Total Time"
                    className="form-control"
                    value={formData["Total Time"]}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Delta</label>
                <input
                    type="text"
                    name="Delta"
                    className="form-control"
                    value={formData.Delta}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Sector 1</label>
                <input
                    type="text"
                    name="Sector 1"
                    className="form-control"
                    value={formData["Sector 1"]}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Sector 2</label>
                <input
                    type="text"
                    name="Sector 2"
                    className="form-control"
                    value={formData["Sector 2"]}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Sector 3</label>
                <input
                    type="text"
                    name="Sector 3"
                    className="form-control"
                    value={formData["Sector 3"]}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Track</label>
                <input
                    type="text"
                    name="Track"
                    className="form-control"
                    value={formData.Track}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                    type="text"
                    name="Date"
                    className="form-control"
                    value={formData.Date}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-success">
                Submit
            </button>
        </form>
    );
}

export default AddLapTimeForm;
