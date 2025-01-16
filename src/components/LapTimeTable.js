import React from "react";

function LapTimeTable({ lapTimes }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Lap</th>
                    <th>Total Time</th>
                    <th>Delta</th>
                    <th>Sector 1</th>
                    <th>Sector 2</th>
                    <th>Sector 3</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {lapTimes.map((lap, index) => (
                    <tr key={index}>
                        <td>{lap.Lap}</td>
                        <td>{lap["Total Time"]}</td>
                        <td>{lap.Delta}</td>
                        <td>{lap["Sector 1"]}</td>
                        <td>{lap["Sector 2"]}</td>
                        <td>{lap["Sector 3"]}</td>
                        <td>{lap.Date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default LapTimeTable;
