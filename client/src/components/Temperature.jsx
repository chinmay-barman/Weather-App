export default function Temperature({temperature, humidity}){
    return(
        <div>
            <div>
                <h3>Current Weather</h3>
                <h3>Humidity: {humidity}%</h3>
            </div>
            <div>
                <h1>{temperature.current}°C</h1>
                <div>
                    <img src="https://img.freepik.com/premium-psd/sunny-rainy-cloudy-day-weather-forecast-icon-illustration_47987-10695.jpg" alt="Weather Logo" />
                </div>
                <div>Description</div>
            </div>
            <div>
                <p>Feels Like: {temperature.feels_like}°C</p>
                <p>Maximum: {temperature.max}°C</p>
                <p>Minimum: {temperature.min}°C</p>
            </div>

        </div>
    )
}