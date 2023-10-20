import React, {useEffect, useState} from 'react';
import { getForecastData } from "../services/api";

function Forecast({data, submit}) {
    const [forecast, setForecastData] = useState();

    const dateConverter = (date) => {
        var allDays= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(date * 1000); // to get the DateTime. 
        var dayName = allDays[d.getDay()]; // It will give day index, and based on index we can get day name from the array. 
        return dayName;
    }

    useEffect(() => {
        const getForecast = async () => {
            data && await getForecastData(data)
                .then((res) => {
                setForecastData(res.data.list);
            }).catch((error) => {
                console.log(error);
            });
        };

        getForecast();
      },[submit]);// eslint-disable-line react-hooks/exhaustive-deps

    return ( 
            <div>
                <h2>Extended Forecast</h2>

                <div className='card-container card-white'>
                    {forecast && forecast.map((item) => (
                        <div key={item.dt} className='card'>
                            <p className='forecast-day'>{dateConverter(item.dt)}</p>
                            <div>
                                <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={item.weather[0].icon}/>
                            </div>
                            <p className='m-0'>{item.weather[0].main}</p>
                            <p>{Math.round(item.temp.max)}<sup>&deg;</sup>C / {Math.round(item.temp.min)}<sup>&deg;</sup>C</p>
                        </div>
                    ))}
                </div>
            </div>
     );
}

export default Forecast;