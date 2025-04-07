import React, { use, useState } from 'react';
import Country from '../../country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([])

    const countries = use(countriesPromise);

    const handleVisitedCountries = (country) => {
        console.log('okay', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <h3>Traveled so far: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>

            <div className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.cca3} handleVisitedCountries = {handleVisitedCountries} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;