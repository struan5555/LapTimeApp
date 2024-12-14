import React from "react";

function LapTimeTable({ lapTimes, handleDelete }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Lap</th>
                    <th scope="col">Total Time</th>
                    <th scope="col">Delta</th>
                    <th scope="col">Sector 1</th>
                    <th scope="col">Sector 2</th>
                    <th scope="col">Sector 3</th>
                    <th scope="col">Track</th>
                    <th scope="col">Date</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {lapTimes.map((lap) => (
                    <tr key={lap._id}>
                        <td>{lap.Lap}</td>
                        <td>{lap["Total Time"]}</td>
                        <td>{lap.Delta}</td>
                        <td>{lap["Sector 1"]}</td>
                        <td>{lap["Sector 2"]}</td>
                        <td>{lap["Sector 3"]}</td>
                        <td>{lap.Track}</td>
                        <td>{lap.Date}</td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(lap._id)} // Pass the _id to the handler
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default LapTimeTable;
