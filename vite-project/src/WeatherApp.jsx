import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useEffect, useState } from "react";
export default function WeatherApp(){
    
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        temp: 14,
        tempMin: 12,
        tempMax: 14.5,
        humidity: 82,
        feelsLike: 13.65,
        weather: "mist"
    })
    useEffect(()=>{
        function setDefault(){
            setWeatherInfo({
                city:"NA",
                temp: "NA",
                tempMin: "NA",
                tempMax: "NA",
                humidity: "NA",
                feelsLike: "NA",
                weather: "NA"
            })
        }
        setDefault()
    },[])
    let updateInfo=(result)=>{
        setWeatherInfo(result)
    }
    return(
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <br /> <br />

            <InfoBox info = {weatherInfo}/>
        </div>

        
    )
}