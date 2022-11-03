import React, { useEffect, useState } from "react";

const Tempapp = () => {

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Pune");

    useEffect(()=>{
        const fetchApi = async () => {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a644118f17532052e2a5ab8935b854ac&units=metric`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search])

    return(
        <div className="container">
        <div className="box">
            <div className="inputData">
            <input type="search" value={search} placeholder="Search..." className="inputFeild" onChange={(event)=>{
                setSearch(event.target.value);
            }}/>
            </div>
            {
                !city ? (<p>No data found !!</p>)
                :
            <div>
            <div className="info">
            <h2 className="location">
            <i className="fa-solid fa-location-dot"></i>
            {search}
            </h2>
            <h1 className="temp">
            {city.temp}℃
            </h1>
            <h3 className="tempmin_max">
            Min : {city.temp_min}℃ | Max : {city.temp_max}℃ 
            <br/><br/>
            Humidity : {city.humidity} % | Feels like : {city.feels_like}℃
            </h3>
            </div>
            <div className="wave1"></div>
            <div className="wave2"></div>
            <div className="wave3"></div>
            </div>
            }
        </div>
        </div>
    );
}

export default Tempapp;