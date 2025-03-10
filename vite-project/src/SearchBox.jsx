import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("")
    let [error,setError]=useState(false)
    const api_url="https://api.openweathermap.org/data/2.5/weather"

    

    const getWeatherInfo=async ()=>{
        try{
            let r=  await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`)
            let jr=await r.json()
            let result={
                city:city,
                temp:jr.main.temp,
                tempMin:jr.main.temp_min,
                tempMax:jr.main.temp_max,
                humidity:jr.main.humidity,
                feelsLike:jr.main.feels_like,
                weather:jr.weather[0].description
            }
            setError(false)
            return result

        }
        catch(e){
            throw e
        }
      
    }
    

    let handleChange=(event)=>{
        setCity(event.target.value)
    }
    let handleSubmit=async (event)=>{
        try{event.preventDefault()
        let r=await getWeatherInfo()
        updateInfo(r)
        setCity("")}
        catch(err){
            setError(true)
        }
    }
    return(
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City" variant="outlined"  required value={city} onChange={handleChange} /> &nbsp; &nbsp;
            <Button variant="contained" type='submit' >Search</Button>
            {error && <p style={{color:"red"}}>No such place exists</p> }
            </form>

            
        </div>
    )
}
