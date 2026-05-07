const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.get('/api/weather/:city', async(req, res)=>{
    try{
        const city = req.params.city.trim();
        if (!city) {
            return res.status(400).json({ error: "City is required" });
        }
        const response = await fetch(
            `${process.env.URL}?q=${city}&appid=${process.env.API_KEY}&units=metric`
        );
        if(!response.ok){
            return res.status(response.status).json({error: response.statusText});
        }

        const data = await response.json();
        if(data.cod!==200 && data.cod!=="200"){
            return res.status(data.cod).json({error: data.message});
        }

        const weatherData = {
            location: {
                city: data.name,
                country: data.sys.country
            },
            temperature: {
                current: data.main.temp,
                feels_like: data.main.feels_like,
                min: data.main.temp_min,
                max: data.main.temp_max
            },
            weather: {
                main: data.weather[0].main,
                description: data.weather[0].description
            },
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            clouds: data.clouds.all
        };
        res.json(weatherData);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});