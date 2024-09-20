import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries]=useState([]);
    const [visitedCountry, setVisitedCountry]=useState([]);
    const handleVisited=(country)=>{
        const newVisitedCountry=[...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    }
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h2>Visited Country : {visitedCountry.length}</h2>
                <ol>
                    {
                        visitedCountry.map(country=> <li key={country.cca3}>{country.name?.common}</li>)
                    }
                </ol>

            </div>
            <div className="country-container">
            {
                countries.map(country=><Country key={country.cca3}
                     country={country}
                     handleVisited={handleVisited}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;