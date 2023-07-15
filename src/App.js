import { useEffect , useState } from "react";
import "./App.css";
// import Card from "./Component/Card";
// import Sdata from "./Component/Sdata";
// import TimeState from "./Component/TimeState";
import Movie from "./Component/Movie"
import SearchIcon from "./search.svg";

//2809ab38
const API_URL = "http://www.omdbapi.com?apikey=2809ab38";

function App() {
  const [searchTerm,setSearchTerm]= useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies({searchTerm});
  },[]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  };
  
  return (
    <>
      {/* <header className='main__header'>
            <h1>!!...Best Movies as per Your Search...!!</h1> 
        </header>

        <body className='main__body'>
            <div className='main__body-container'>
              {Sdata.map((val)=>{
                return(
                  <Card 
                  key= {val.id}
                  movieName = {val.movieName}
                  imgsrc = {val.imgsrc}
                  releaseDate = {val.releaseDate}
                  category = {val.category}
                  link = {val.link}
                  />
                )
              })}
            </div>
            
        </body> */}

      <div className="app">
        <h1>!!!...MovieLand...!!!</h1>

        <div className="search">
          <input
            type="text"
            placeholder="Search For Movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value) }
          />
          <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)}/>
        </div>

          <div className="container">
              {
                (movies.length > 0) ? (
                  movies.map((val)=>{
                    return(
                      <Movie movie={val}/>
                      // Poster = {val.Poster}
                      // Title = {val.Title}
                      // Type = {val.Type}
                      // Year = {val.Year}
                      // imdbID = {val.imdbID}/
                    )                  })
                ):(<div className="empty">
                <h2>No movies found</h2>
              </div>)
              }
          </div>
        
      </div>
    </>
  );
}

export default App;
