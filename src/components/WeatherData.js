import React from "react";

export default function WeatherData({ list }){
  function handleClick(event){
    console.log(event.target.value)
  }
  return (
    <>
    <p> Here is the list of the current 7 day forecast</p>
    {list.map((item) => (
      <li key={item.dt_txt}>
      <p>{item.dt_txt}</p>
      <p>{item.weather[0].description}</p>
      <p>{item.main.temp}</p>
    </li>
    ))}
  </>
  )
}  
