import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '38cb0761d0ba0bb3e818b384f2a71601';

export const fetchweather = async (query)=>{
    const {data} = await axios.get(URL,{
        params:{
            q: query,
            units: 'metric',
            appid: API_KEY,
        }
    })

    return data;
}