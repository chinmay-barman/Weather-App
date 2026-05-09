import styles from './Location.module.css'
export default function Location({location}){
    return(
        <div className={styles.location}>
            {location.city && location.country && (
                <h2>{location.city},{location.country}</h2>
            )}
        </div>
    )
}
