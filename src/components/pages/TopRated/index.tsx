import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../API_KEY";
import MovieCard from "../Moviecard";

const TopRated = () => {
  const [rated, setRated] = useState([]);
  const [page, setPage] = useState([1]);
  function getRated() {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    ).then((res) => {
      setRated(res.data.results);
    });
  }
  useEffect(() => {
    getRated();
  }, []);
  console.log(rated);
  return (
    <div id="movie">
      <div className="container">
        <div className="movie">
          <div className="movie-div">
            {rated.map((el) => (
              <MovieCard element={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
