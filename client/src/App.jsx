import { useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Location from './components/Location'
import Temperature from './components/Temperature'
import ExtraInfo from './components/ExtraInfo'
import Map from './components/Map'
function App() {
  const [city, setCity] = useState('kolkata')
  const [location, setLocation] = useState({});
  const [temperature, setTemperature] = useState({});
  const [weather, setWeather] = useState({});
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [clouds, setClouds] = useState(0);
  useEffect(()=>{
    async function fetchData(){
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/api/weather/${city}`);
      const data = await response.json();
      console.log("Received data:", data);
      setLocation(data.location);
      setTemperature(data.temperature);
      setWeather(data.weather);
      setHumidity(data.humidity);
      setWindSpeed(data.windSpeed);
      setClouds(data.clouds);
    }
    fetchData();
  },[city]);

  return(
    <>
      <div>
        <Header/>
        <SearchBar setCity = {setCity}/>
        <Location location={location}/>
        <Temperature temperature={temperature} humidity={humidity}/>
        <ExtraInfo windSpeed={windSpeed} clouds={clouds} weather={weather}/>
        <Map city={city}/>
      </div>
    </>
  )
}

export default App
