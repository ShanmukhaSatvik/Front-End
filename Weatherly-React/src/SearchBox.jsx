import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
function SearchBox({updateInfo}) {
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    async function getWeatherInfo(city) {
        try {
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description
            };
            return result;
        } catch (err) {
            throw err;
        }
    };
    useEffect(()=>{
        async function sideEffect() {
            const info = await getWeatherInfo("Hyderabad");
            updateInfo(info);      
        };
        sideEffect();
    },[]);
    function handleChange(event) {
        setCity(event.target.value);
    };
    async function handleSubmit(event) {
        try {
            event.preventDefault();
            let newInfo=await getWeatherInfo(city);
            updateInfo(newInfo);
            setCity("");
            setError(false);
        } catch (error) {
            setCity("");
            setError(true);
        }
    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange} value={city}/>
                <br /><br />
                <Button variant="contained" type='Submit'>Search</Button>
                {error && <p style={{color:"red"}}>No such place exists!</p> }
            </form>
        </div>
    );
};
export default SearchBox;