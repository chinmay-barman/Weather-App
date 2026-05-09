import styles from './Temperature.module.css';
import { WiCloud, WiDaySunny, WiFog, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";

export default function Temperature({temperature, humidity, weather}){
    const current = temperature?.current;
    const feelsLike = temperature?.feels_like;
    const max = temperature?.max;
    const min = temperature?.min;
    const iconUrl = weather?.icon ? `https://openweathermap.org/img/wn/${weather.icon}@2x.png` : "";
    const weatherMain = weather?.main?.toLowerCase();

    const WeatherIcon = (() => {
        if (weatherMain?.includes("thunderstorm")) return WiThunderstorm;
        if (weatherMain?.includes("rain") || weatherMain?.includes("drizzle")) return WiRain;
        if (weatherMain?.includes("snow")) return WiSnow;
        if (weatherMain?.includes("cloud")) return WiCloud;
        if (weatherMain?.includes("mist") || weatherMain?.includes("fog") || weatherMain?.includes("haze")) return WiFog;
        return WiDaySunny;
    })();

    const formatTemp = (value) => {
        return Number.isFinite(value) ? `${value.toFixed(0)}°C` : '--°C';
    };

    return(
        <div className={styles.temperature}>
            <p className={styles.temperatureTitle}>Current Weather</p>
            <p className={styles.humidity}>Humidity: {humidity}%</p>
            <p className={styles.temperatureValue}>{formatTemp(current)}</p>
            <div className={styles.weatherLogo}>
                {iconUrl ? (
                    <img src={iconUrl} alt={weather?.description || "Weather logo"}/>
                ) : (
                    <WeatherIcon className={styles.weatherIcon} aria-label={weather?.description || "Weather logo"}/>
                )}
            </div>
            <p className={styles.feels_like}>Feels Like: {formatTemp(feelsLike)}</p>
            <div className={styles.temperatureDetails}>
                <p>Max: {formatTemp(max)}</p>
                <p>Min: {formatTemp(min)}</p>
            </div>
        </div>
    )
}
