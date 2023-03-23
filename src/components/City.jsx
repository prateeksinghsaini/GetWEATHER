import React from 'react'
import { useState, useEffect } from 'react';
import Info from './Info';
import Boxes from './Boxes';
import Logo from './Logo';

export default function City() {
  const [city, setcity] = useState({
    cityName: "",
    lat: "-.-",
    lon: "-.-",
    icon: " ",
    temp: "0",
    des1: " ",
    des2: " ",
    min: " ",
    max: " ",
    feelsLike: " ",
    timezone: ".. / .. ",
    date: "___-__-__ ",
    uvIndex: "0",
    humidity: "0",
    wind: "0",
    pressure: "0",
    sunrise: "00:00:00",
    sunset: "00:00:00"
  });
  const [search, setsearch] = useState("Gurgoan");
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {

    async function getCity() {
      try {
        var response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?unitGroup=metric&key=293ZKDKPFM64UYS3UKL2BC662`)
        var result = await response.json()
        ///console.log(result);
        setSpinner(false)
        setcity((old) => {
          return ({
            ...old,
            cityName: result.resolvedAddress,
            lat: result.latitude,
            lon: result.longitude,
            icon: result.days[0].icon,
            temp: result.days[0].temp,
            des1: result.description,
            des2: result.days[0].description,
            min: result.days[0].tempmin,
            max: result.days[0].tempmax,
            feelsLike: result.days[0].feelslike,
            timezone: result.timezone,
            date: result.days[0].datetime,
            uvIndex: result.days[0].uvindex,
            humidity: result.days[0].humidity,
            wind: result.days[0].windspeed,
            pressure: result.days[0].pressure,
            sunrise: result.days[0].sunrise,
            sunset: result.days[0].sunset
          })
        })
      }
      catch (error) {

      }
    }
    getCity()

  }, [search])

  function postresult(e) {
    e.preventDefault()
  }

  return (
    <div className='col-12 pt-4' >
      <Logo />
      <div className='col-12 d-flex justify-content-center'>
        <form onSubmit={postresult} className=" col-sm-12 col-md-6" role="search">
          <input className="form-control p-3 me-2" maxLength={30}
            onChange={(e) => {
              setsearch(e.target.value)
            }
            }
            id='inputID' style={{ backgroundColor: "transparent" }} type="search" placeholder="Search..." aria-label="Search" />
        </form>
      </div>
      <div className='col-12 pt-5' style={{ overflow: "hidden" }}>
        {spinner ? (<div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>) :
          (<h1 className='col-sm-12 col-md-4 col-lg-8'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className=" bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            {search.toUpperCase()}
          </h1>)
        }

        <div className='col-sm-12 col-md-8 col-lg-6 newfont'>
          {city.cityName} / {city.lat}, {city.lon}
        </div >

      </div>
      <hr className='mt-3' />
      <Info icon={city.icon} temp={city.temp} des1={city.des1} des2={city.des2} spinner={spinner} feelsLike={city.feelsLike} date={city.date} timezone={city.timezone} min={city.min} max={city.max} sunrise={city.sunrise} sunset={city.sunset} />
      <Boxes uvIndex={city.uvIndex} hummidity={city.humidity} wind={city.wind} pressure={city.pressure} />
    </div>
  )
}
