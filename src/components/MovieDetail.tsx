import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import "../styles/MovieDetail.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export const MovieDetail = () => {
    const { movie } = useContext(GlobalContext);
    const movies = movie[0];
    const moviepath = `${IMG_API + movies?.poster_path}`;

    return (
        <div>
            {movie.length > 0 ? 
                <div className="movie_card">
                    <div className="info_section">
                        <div className="movie_header">
                            <img className="locandina" src={moviepath} alt={movies?.title ?? movies.name}/>
                            <h1>{movies?.title ?? movies?.name}</h1>
                        </div>
                        <div className="movie_desc">
                            <h4><strong>Release Date: </strong>{movies?.release_date}</h4>
                            <h4><strong>Score: </strong>{movies?.vote_average}</h4>
                            <h3>Overview</h3>
                            <p className="text"> {movies?.overview} </p>
                        </div>
                    </div>
                    <div className="blur_back" style={{ backgroundImage: `url(${moviepath})` }}></div>
                </div>
            : <h1 className="noAvalaible">Movie not available</h1>}
        </div>
    )
}