import React, {useEffect, useState, useMemo} from 'react';
import { getWeatherData } from "../services/api";
import Information from "./Information";
import Forecast from './Forecast';
import debounce from "lodash.debounce";

function Search() {
    const [weatherData, setWeatherData] = useState()
    const [city, setCity] = useState()
    const [submit, HandleSubmit] = useState(false)
    const [errorStatus, setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            if (!city) {
                return;
            }
            city && await getWeatherData(city)
                .then((res) => {
                setWeatherData(res.data);
                setError(false);
            }).catch((error) => {
                setError(true);
            });
        };
        getData();
        HandleSubmit(false)
      },[submit]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleCity = (event) => {
        setCity(event.target.value)
    }

    const debouncedChangeHandler = useMemo(() => {
        return debounce(handleCity, 300);
      }, []);

    const handleClick = (event) => {
        event.preventDefault();
        HandleSubmit(true)
    }
    
    return ( 
        <>
            <form className="search-container" onSubmit={handleClick}>
                <svg className="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g className="search-path" fill="none" stroke="#848F91"><path d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
                <input type="text" placeholder="Enter City" onChange={debouncedChangeHandler} />
            </form>

            <p> Note: A Weather App that provides accurate weather information for any location worldwide</p>

            { !errorStatus ?
              <div>
                <Information data={weatherData}></Information>
                {weatherData && <Forecast data={city} submit={submit}></Forecast>}
              </div>
            :
                <p className="error">Sorry! we don't have any information on specified location.</p>
            }
            
        </>
     );
}

export default Search;