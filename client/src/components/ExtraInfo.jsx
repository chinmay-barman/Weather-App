export default function ExtraInfo({windSpeed, clouds}){
    return(
        <div>
            <div>
                <p>Wind Speed: {(windSpeed * 3.6).toFixed(1)} km/h</p>
            </div>
            <div>
                <p>Cloud: {clouds}%</p>
            </div>
        </div>
    )
}