import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState({});
    function updateInfo(newInfo) {
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weatherly</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
};
export default WeatherApp;