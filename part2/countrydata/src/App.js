import axios from "axios"
import { useEffect, useState } from "react"

const ShowDetail = ({country, weather}) => {
  console.log("country",country)
  
    const curr= weather
    console.log("weather", weather)
  
  
  return (
    <div>
      <h2>{country.name.common}</h2>
      capital: {country.capital[0]}
      <br/>
      area: {country.area}
      <br/>
      <h3>Languages</h3>
      
      <ul>
        {Object.entries(country.languages).map((item, index) => 
        <li key= {index}>{item[1]}</li>)}
      </ul>
      <img src= {country.flags.svg} width= "15%" border= "5px solid black"/>
      <br/>
      <h3>Weather in {country.capital[0]}</h3>
      <br/>
      <p>Temperature {weather.current.temp_c} Celsius</p>
      <br/>
      <img src= {'http:'+weather.current.condition.icon}/>
      <br/>
      <p>Wind Speed {weather.current.wind_kph}</p>
    </div>
  )
}

const App = ({note}) => {
  const [countries, setCountries] = useState([])
  const [weather, setWeather]= useState({})
  useEffect(() => {
    if((countries.length==1))
    {
      const lat= countries[0].capitalInfo.latlng[0];
  const lon= countries[0].capitalInfo.latlng[1];
  axios.get('http://api.weatherapi.com/v1/current.json?key={API KEY}&q='+countries[0].capital[0]+'&aqi=yes')
  .then(response => {
    console.log('promise fulfilled')
    setWeather(response.data)
    console.log(weather);
  })
      
    }
    // else if(countries.length===1 && countries[0].capital[0]!== weather.location.name)
    // {
    //   axios.get('http://api.weatherapi.com/v1/current.json?key=080f966b342240a3981145657222804%20&q='+countries[0].capital[0]+'&aqi=yes')
    //   .then(response => {
    //     console.log('promise fulfilled')
    //     setWeather(response.data)
    //     console.log(weather);
    //   })
    // }
    
  })

  const findCountries = (event) => {
    const str= event.target.value
    const res= note.filter((item) => {
      return item.name.common.includes(str)
    })
    // console.log(res);
    setCountries(res)
  }
  


  return (
    <>
    {console.log("testing", weather)}
    find countries <input id="country" onChange={findCountries}/>
    <br/>
    {countries.length>10?<>Too many results. Please be more specific</>:countries.length===1?
    <ShowDetail country= {countries[0]} weather= {weather}/>:countries.map((item, index) => {
      return (
        <p key= {index}>{item.name.common} <button onClick= {()=>setCountries([item])}>show</button></p>
      )
    })}
    </>
  )
}

export default App