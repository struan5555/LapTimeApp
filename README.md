# LapTimeApp

LapTimeApp is a full-stack web application designed for managing and displaying lap time data for racing enthusiasts. It provides features for viewing, adding, and deleting lap times from a MongoDB database. The application includes a React frontend and an Express backend hosted on Render, with GitHub Pages used to deploy the frontend.

---

## Features

- **View Lap Times:** Fetch and display all lap times stored in the database.
- **Add Lap Times:** Add new lap times with details like Lap Number, Total Time, Delta, Sectors, Track, and Date.
- **Delete Lap Times:** Remove existing lap times from the database.

---

## Tech Stack

### Frontend
- **React**
- **Bootstrap** (for styling)
- **GitHub Pages** (for deployment)

### Backend
- **Node.js** with Express
- **MongoDB** using Mongoose
- **Render** (for deployment)

---

## Installation

### Prerequisites
- Node.js (v16 or later)
- Git

### Clone the Repository
```bash
git clone https://github.com/struan5555/LapTimeApp.git
cd LapTimeApp
```

### Install Dependencies
```bash
npm install
```

---

## Running the Application Locally

### Frontend
1. Navigate to the root directory of the project.
2. Start the React development server:
   ```bash
   npm start
   ```
3. Access the app at [http://localhost:3000](http://localhost:3000).

### Backend
1. Navigate to the backend folder (if applicable).
2. Start the Express server:
   ```bash
   node server.js
   ```
3. The backend will run on [http://localhost:5000](http://localhost:5000).

---

## Deployment

### Frontend
1. Build the React app:
   ```bash
   npm run build
   ```
2. Copy the contents of the `build/` directory to the `gh-pages` branch.
3. Push the `gh-pages` branch to GitHub to deploy the site using GitHub Pages.

### Backend
The backend is deployed on Render. Ensure the correct environment variables (e.g., `MONGO_URI`) are set in Render.

---

## API Endpoints

### Base URL
- Deployed: `https://laptimeapp-backend.onrender.com`

### Routes

#### Get All Lap Times
**GET** `/api/laptimes`
- Fetch all lap times from the database.

#### Add Lap Time
**POST** `/api/laptimes`
- Body:
  ```json
  {
    "Lap": "1",
    "Total Time": "01:32.1",
    "Delta": "23.23",
    "Sector 1": "40.7",
    "Sector 2": "25.58",
    "Sector 3": "25.86",
    "Track": "Knockhill",
    "Date": "19/06/2024"
  }
  ```

#### Delete Lap Time
**DELETE** `/api/laptimes/:id`
- Deletes a lap time by its `id`.

---

## Project Structure
```plaintext
LapTimeApp/
├── public/
├── src/
│   ├── components/
│   │   ├── AddLapTimeForm.js
│   │   └── LapTimeTable.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── server.js
```

---

## Environment Variables
Ensure the following variables are configured in the `.env` file for local development:

```env
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
```

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgements
- [React Documentation](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)

---

## Live Demo
- **Frontend:** [LapTimeApp on GitHub Pages](https://struan5555.github.io/LapTimeApp/)
- **Backend:** Hosted on Render
