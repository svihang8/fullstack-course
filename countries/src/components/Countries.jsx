import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
export default function Countries({ filter }) {
  const [countries, setCountries] = useState([]);
  const [visibility, setVisibility] = useState(-1);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
         .then((res) => {
            let countries = [...res.data];
            //console.log(countries[0].name.common);
            
            countries = countries.filter((country) => {
              let countryName = country.name.common;
              if(countryName.toLowerCase().includes(filter.toLowerCase())) {
                //console.log('true');
                return true;
              }
              return false;
            })

            let visibilityIndex;
            if(countries.length === 1) {
              visibilityIndex = 2;
            } else if(countries.length <= 10) {
              visibilityIndex = 1;
            } else {
              visibilityIndex = 0;
            }
            console.log(visibilityIndex);
            setVisibility(visibilityIndex);
            setCountries(countries);
         })
  }, [filter])

  return (
    <>
      {
        visibility === 0 &&
        <p>Too many matches, specify another filter</p>
      }

      {
        visibility === 1 &&
        countries.map((country) => {
          return (
            <p key = {country.name.common}>{country.name.common}</p>
          )
        })
      }

      {
        visibility === 2 &&
        countries.map((country) => {
          console.log(country);
          let listofLanguages = [];
          for(const language in country.languages) {
            listofLanguages.push([language, country.languages[language]]);
          }
          console.log(listofLanguages);
          return (
            <div key = {country.name.common}>
              <h2>{country.name.common}</h2>
              <p>capital {country.capital[0]}</p>
              <p>area {country.area}</p>
              <p>Languages</p>
                  <ul>
                    {
                      listofLanguages.map((language) => {
                        return (
                        <>
                          <li key = {language[0]}>{language[1]}</li>
                        </>
                        )
                      })
                    }
                  </ul>
              <img src = {country.flags.png} alt = {country.flag || 'Not available'} style={{border : '1px solid',}}/>
            </div>
          )
        })        
      }
    </>
  )
}
