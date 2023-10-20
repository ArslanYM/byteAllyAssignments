import React from 'react';

function Information({data}) {
    return ( 
        data ? 
        <div className='weather-details card-white'>
            <div className='weather-details-col'>
                <h2 className='m-0'>{data.name}, {data.sys.country}</h2>
                <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0].icon} className='main-icon'/>
                <h2 className='main-temp'>{data.main.temp}<sup>&deg;</sup>C</h2>
                <p className='m-0'>{data.weather[0].main}, {data.weather[0].description}</p>
            </div>

            <div className='weather-details-col col-right'>
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                    aria-describedby="desc" role="img">
                    <title>Arrow Up</title>
                    <desc>A line styled icon from Orion Icon Library.</desc>
                    <path data-name="layer1"
                    fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="2" d="M48 28.001L32 12 16 28.001l4.242 4.242 8.759-8.759V52h6V23.486l8.757 8.757L48 28.001z"
                    strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                    Max: <span>{Math.round(data.main.temp_max)}<sup>&deg;</sup>C</span></p>
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                    aria-describedby="desc" role="img">
                    <title>Arrow Down</title>
                    <desc>A line styled icon from Orion Icon Library.</desc>
                    <path data-name="layer1"
                    fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="2" d="M16 36l16 16 16-16-4.242-4.243-8.759 8.759V12h-6v28.514l-8.757-8.757L16 36z"
                    strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                    Min: <span>{Math.round(data.main.temp_min)}<sup>&deg;</sup>C</span></p>
                {/* <p>Feels Like: {Math.round(data.main.feels_like)}<sup>&deg;</sup>C</p> */}
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                    aria-describedby="desc" role="img" >
                    <title>Humidity</title>
                    <desc>A line styled icon from Orion Icon Library.</desc>
                    <path data-name="layer2"
                    d="M51.9 40.1a20.6 20.6 0 0 0-1-4.9C46.9 20.8 32 2 32 2S17.1 20.8 13 35.2a20.6 20.6 0 0 0-1 4.9c0 .5-.1 1-.1 1.5A20.2 20.2 0 0 0 32 62a20.2 20.2 0 0 0 20-20.4c0-.5 0-1-.1-1.5z"
                    fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="2" strokeLinejoin="round"
                    strokeLinecap="round"></path>
                    <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit="10"
                    strokeWidth="2" d="M38 30L26 50" strokeLinejoin="round" strokeLinecap="round"></path>
                    <circle data-name="layer1" cx="26" cy="32" r="4" fill="none" stroke="#202020"
                    strokeMiterlimit="10" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></circle>
                    <circle data-name="layer1" cx="38" cy="48" r="4" fill="none"
                    stroke="#202020" strokeMiterlimit="10" strokeWidth="2" strokeLinejoin="round"
                    strokeLinecap="round"></circle>
                    </svg>
                    Humidity: <span>{data.main.humidity} %</span></p>
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                    aria-describedby="desc" role="img">
                    <title>Windstorm</title>
                    <desc>A line styled icon from Orion Icon Library.</desc>
                    <path data-name="layer1"
                    d="M56 28a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-8m10 16a4 4 0 0 0 4-4 4 4 0 0 0-4-4H44"
                    fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="2" strokeLinejoin="round"
                    strokeLinecap="round"></path>
                    <path data-name="layer2" d="M56 20.1a12.9 12.9 0 0 0-7-2h-.5a17 17 0 0 0-32.3 4.4A11 11 0 1 0 13 44h21a6 6 0 0 1 6 6 6 6 0 0 1-6 6"
                    fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="2" strokeLinejoin="round"
                    strokeLinecap="round"></path>
                    <path data-name="layer1" d="M24 36h14a6 6 0 0 0 6-6 6 6 0 0 0-6-6M20 36h-2"
                    fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="2" strokeLinejoin="round"
                    strokeLinecap="round"></path>
                    </svg>
                    Wind: <span>{data.wind.speed} mph</span></p>
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                    aria-describedby="desc" role="img">
                    <title>Strong Wind</title>
                    <desc>A line styled icon from Orion Icon Library.</desc>
                    <path data-name="layer2"
                    d="M34 7a10 10 0 0 1 10 10 10 10 0 0 1-10 10H8a6 6 0 0 0-6 6 6 6 0 0 0 6 6h24a8 8 0 0 1 8 8 8 8 0 0 1-8 8"
                    fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="2" strokeLinejoin="round"
                    strokeLinecap="round"></path>
                    <path data-name="layer2" d="M26 11a4 4 0 0 1 4 4 4 4 0 0 1-4 4H14"
                    fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="2" strokeLinejoin="round"
                    strokeLinecap="round"></path>
                    <path data-name="layer1" d="M50 15a8 8 0 0 1 8 8 8 8 0 0 1-8 8h-6m12 20a6 6 0 0 0 6-6 6 6 0 0 0-6-6H44"
                    fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="2" strokeLinejoin="round"
                    strokeLinecap="round"></path>
                    </svg>
                    Pressure: <span>{data.main.pressure} hPa</span></p>
            </div>
        </div>
        : ''
     );
}

export default Information;