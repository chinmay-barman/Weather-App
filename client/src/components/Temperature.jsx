import styles from './Temperature.module.css';

export default function Temperature({temperature, humidity}){
    return(
        <div className={styles.temperature}>
            <p className={styles.temperatureTitle}>Current Weather</p>
            <p className={styles.humidity}>Humidity: {humidity}%</p>
            <p className={styles.temperatureValue}>{temperature.current}°C</p>
            <div className={styles.weatherLogo}>
                <img src="htt" alt="Weather Logo"/>
            </div>
            <p className={styles.feels_like}>Feels Like: {temperature.feels_like}°C</p>
            <div className={styles.temperatureDetails}>
                <p>Maximum: {temperature.max}°C</p>
                <p>Minimum: {temperature.min}°C</p>
            </div>
        </div>
    )
}