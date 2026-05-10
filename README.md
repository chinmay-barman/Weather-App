# Weather App

A simple full-stack weather application that lets users search for a city and view current weather details in a clean React interface.

## What The Project Does

Weather App fetches live weather data for a searched city and displays:

- Current temperature
- Feels-like, minimum, and maximum temperature
- Humidity
- Wind speed
- Cloud coverage
- Weather condition and icon
- An embedded Google Map for the selected city

The frontend talks to a small Express backend, and the backend requests weather data from the OpenWeather API.

## Why It Exists

This project was built to practice connecting a React frontend with a Node.js backend while working with real API data. It keeps the weather API key on the server side instead of exposing it directly in the browser, which makes the app structure closer to how a real production app would be organized.

## How To Run It

### 1. Install Dependencies

From the project root, install dependencies for both the server and client:

```bash
cd server
npm install

cd ../client
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file inside `server/`:

```env
PORT=3000
URL=https://api.openweathermap.org/data/2.5/weather
API_KEY=your_openweathermap_api_key
```

Create a `.env` file inside `client/`:

```env
VITE_API_URL=http://localhost:3000
```

### 3. Start The Backend

```bash
cd server
npm run dev
```

Or run without auto-restart:

```bash
npm start
```

### 4. Start The Frontend

In another terminal:

```bash
cd client
npm run dev
```

Open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Technologies Used

- React
- Vite
- CSS Modules
- React Icons
- Node.js
- Express
- CORS
- Dotenv
- OpenWeather API
- Google Maps embed

## What Makes It Interesting

- It uses a backend API layer so the OpenWeather API key stays out of the client code.
- It converts and formats raw API data into a smaller response shape that is easier for the React UI to consume.
- It combines weather data with a map view, making each search feel more complete than a plain weather card.
- It uses modular React components for the header, search bar, location, temperature, extra weather details, and map.
- It includes graceful fallback weather icons from `react-icons` if the OpenWeather icon is not available.
