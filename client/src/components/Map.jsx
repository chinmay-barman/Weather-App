import styles from './Map.module.css'

function Map({ city }) {
  return (
    <div className={styles.map}>
      <iframe
        width="80%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps?q=${city}&output=embed`}
        title="Google Map"
      ></iframe>
    </div>
  );
}

export default Map;