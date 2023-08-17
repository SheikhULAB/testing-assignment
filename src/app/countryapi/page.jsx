"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetails = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v2/all");
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Country Details..</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map((country, index) => (
          <div key={index} className="border p-4">
            <h2 className="text-lg font-semibold mb-2">{country.name}</h2>
            <img src={country.flags.svg} alt={`${country.name} Flag`} className="w-16 h-10 mb-2 mx-auto" />
            <p className="mb-1">Capital: {country.capital}</p>
            <p className="mb-1">Region: {country.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryDetails;
