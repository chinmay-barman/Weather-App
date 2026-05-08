import styles from './ExtraInfo.module.css'

export default function ExtraInfo({windSpeed, clouds, weather}){
    return(
        <div className={styles.container}>
            <p className={styles.description}>{weather.description}</p>
            <p className={styles.windSpeed}>Wind Speed: {(windSpeed * 3.6).toFixed(1)} km/h</p>
            <p className={styles.clouds}>Cloud: {clouds}%</p>
        </div>
    )
}