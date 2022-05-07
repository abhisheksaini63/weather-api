import React, { useEffect, useState } from "react";
import './index.css';

const TempApp = () => {
    const [city, setcity] = useState ('');
    const [search, setsearch] = useState ('');

    const getData = async ()=>{
        const res = await fetch('http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=0');
        const accData = await res.json();
        console.log(accData);
    }

    useEffect(()=>{
        getData();
    });
    
    return (
        <>

            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        onChange={(elm) => {
                            setsearch(elm.target.value);
                            
                        }}

                    />
                </div>

                <div className = "info">
                <h2 className = "location">
                    <i className ="fas fa-street-view"/>{city}
                </h2>

                <h1 className  = "temp">50 Cel</h1>
                <h3 className = "tempmin_max"> Min : 5.23 Cel | Max : 5.54 Cel </h3>
            </div>
            <div className = "wave -one"></div>
            <div className = "wave -two"></div>
            <div className = "wave -three"></div>

            </div>

           

        </>

    )
}

export default TempApp;

