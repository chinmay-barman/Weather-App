import styles from './ExtraInfo.module.css'

export default function ExtraInfo({ windSpeed, clouds, weather }) {
    return (
        <div className={styles.container}>
            <p className={styles.description}>
                {weather?.main} - {weather?.description}
            </p>
            <div className={styles.card}>
                <span>Wind Speed</span>
                <strong>{(windSpeed * 3.6).toFixed(1)} km/h</strong>
            </div>

            <div className={styles.card}>
                <span>Clouds</span>
                <strong>{clouds}%</strong>
            </div>
        </div>
    )
}