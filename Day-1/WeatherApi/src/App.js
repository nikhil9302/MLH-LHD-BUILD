import React, {useState} from "react";
import { fetchweather } from "./api/fetchweather.js";
import './App.css'

const App = ()=>{
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e)=>{
        if (e.key==='Enter'){
            const data = await fetchweather(query);
            setWeather(data);
            setQuery('');
            document.getElementById("walk").innerText = "";
            document.getElementById("sweater").innerText = "";
        }
    }
    const walk = ()=>{
        const x = document.getElementById("desc").innerHTML.includes("rain");
        if(x ==true){
            document.getElementById("walk").innerText = "Can take your umbrella and go for a slidee 😈"
        }
        else if(document.getElementById("desc").innerHTML.includes("heavy")){
            document.getElementById("walk").innerText = "It's wise to stay indoors :)"
        }
        else{
            document.getElementById("walk").innerText = "Can go out for a walk :D"
        }
    }
    const cold = ()=>{
        if(Math.round(weather.main.temp)<18){
            document.getElementById("sweater").innerText = "Code red! Code red! Keep yourself warm"
        }
        else{
            document.getElementById("sweater").innerText = "It isn't so cold 👀"
        }
    }
    
    return(
        <div className="main-container">

            <input type="text"className = 'search'placeholder='search...'value={query}onChange={(e)=>setQuery(e.target.value)}onKeyPress={search}/>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="info">
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} className="city-icon" />
                    </div>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                        <p id="desc">{weather.weather[0].description}</p>
                    </div>
                    <div className="quests">
                        <button className="button button5" onClick={walk}>Walk?</button>
                        <p id="walk"></p>
                        <button className="button button5" onClick={cold}>Sweater?</button>
                        <p id="sweater"></p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App;