const API_URL =
    process.env.REACT_APP_API_URL || "http://localhost:5000/api/laptimes";

const fetchLapTimes = async () => {
    try {
        const response = await fetch(API_URL); // Fetch all lap times
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // New database structure
        setLapTimes(data);
    } catch (err) {
        console.error("Error fetching lap times:", err);
        setError(err.message);
    }
};


export const addLapTime = async (API_URL, formData) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};

export const deleteLapTime = async (API_URL, id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
};
