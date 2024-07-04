import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { getWeatherData } from "./services/WeatherService";
import SearchBar from './components/SearchBar';
import WeatherData from './components/WeatherData';
function App() {
  const persistedLocation = localStorage.getItem('searchTerm'); 
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState
  (persistedLocation || 'Stockton, •CA');
  const [location, setLocation] = useState (searchTerm || "")
    function handleChange(event) {
     setSearchTerm(event.target.value);
    }
    function handleSubmit (event) {
      event.preventDefault();
    //  console. log('Submitting'); 
    
  setLocation(searchTerm)}
    useEffect (( )=> {
      localStorage.setItem('searchTerm', searchTerm);
      }, [searchTerm]);
      useEffect(()=> {
        async function fetchData(){
          try {
            setLoading(true);
            const response = await getWeatherData(location);
            console.log(response.data.list);
            setWeatherData(response.data.list);
            setLoading(false);
        }  catch {
          setError(true);
          setLoading(false);
        }
      }
      fetchData();

    }, [location])
    return (
      <div id="main" className="container">
        {/* {`${true ? "container" : "no-container"}`} is another way you can styler class name with a ternary operator */}
        {/* Search Bar Component */}
        <SearchBar handleSubmit={handleSubmit} searchTerm= {searchTerm} handleChange= {handleChange} id= {'search-city'}>
          <strong>Search City: {searchTerm}</strong> 
        </SearchBar>
        {true ? <p>My condition is true</p>: <p>My condition is false</p>}
        {error && <p>There was an error loading your data</p>}
        {loading ? <p>Data Loading</p>: (
          <WeatherData list = {weatherData} />
        )}
        
      </div>
    );
  }
  export default App;
