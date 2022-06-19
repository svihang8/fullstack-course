import React from 'react'

export default function Country({country}) {
    console.log(country);
    let listofLanguages = [];
    for(const language in country.languages) {
      listofLanguages.push([language, country.languages[language]]);
    }
    console.log(listofLanguages);
    
    return (
    <>
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
    </>
  )
}
