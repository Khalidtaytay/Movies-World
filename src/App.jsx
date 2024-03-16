import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import Movie from './Components/MovieCard';




const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=10cb9db9';
fetch('https://www.omdbapi.com/?i=tt3896198&apikey=10cb9db9')
 .then((resolved)=>resolved.json())

export default function App (){
  const [movies,setMovies]= useState([]);
  const [searchTerm,setSearchTerm] = useState('')
  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect (()=>{
    searchMovies('superman');
  },[]);

  const toggleMenu = () => {
    let menubar = document.querySelector('.menu');
    let line1 = document.getElementById('line1');
    let line2 = document.getElementById('line2');
    let line3 = document.getElementById('line3');
      if (menubar.style.display === 'flex') {
        menubar.style.transform = 'translateX(100%)';
        line1.style.transform = 'rotate(0deg)';
        line3.style.transform = 'rotate(0deg)';
        line2.style.opacity = 1;
        setTimeout(() => {
          menubar.style.display = 'none';
        }, 300); // Adjust the delay if needed
      } else {
        menubar.style.display = 'flex';
        line1.style.transform = 'translate3d(0,6px,0) rotate(45deg)';
        line3.style.transform = 'translate3d(0,-6px,0) rotate(-45deg)';
        line2.style.opacity = 0;
      }

  };
  function clickEnter(e) {
    switch(e.key){
      case "Enter":
        searchMovies(searchTerm)
    }
  }
  return(
   <>
    <div className="bar">
        <div className="logo">MoviesWorld</div>
        <ul className="menu">
          <li className="menuItem">Movies</li>
          <li className="menuItem">TV Shows</li>
          <li className="menuItem">LogIn</li>
          <li className="menuItem">About us</li>
        </ul>
        <div className="lines" onClick={toggleMenu}>
          <div className="line" id="line1"></div>
          <div className="line" id="line2"></div>
          <div className="line" id="line3"></div>
        </div>
      </div>
      <div className="all">
           <div className="app">
            <div className="search-title">
                  <h1>MoviesWorld</h1>
                  <div className="search">
                    <input placeholder="Search for movies" 
                    value={searchTerm}
                    onChange={(e)=>{setSearchTerm(e.target.value)}}
                    onKeyDown={clickEnter}
                    />
                    <img src={SearchIcon} alt="" onClick={()=>{searchMovies(searchTerm)}} />
                  </div>

            </div>
                
                    {movies&&movies.length > 0 ? ( <div className="container">
                     {movies.map(movie=>{return ( <><div><Movie movie={movie}/></div></>)})} 
                      </div>) : 
                      <div className="empty">
                         <h2>No movie found !. Please entre Name of a movie</h2> 
                         </div>}
                    
           </div>  
      </div>
  </>
        

)
};