import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { Movies } from "./Home";


const IMG_API = "https://image.tmdb.org/t/p/w1280";


export const MovieCard: React.FC<Movies> = (movieCardProps: Movies) => {
    const { addMovieToWishlist, addMovieToWatched, wishlist, watched, showmovie} = useContext(GlobalContext);

    let storedMovieWishlist = wishlist.find((o: Movies) => o.id === movieCardProps.id);
    let storedMovieWatched = watched.find((o: Movies) => o.id === movieCardProps.id);

    const wishlistDisabled = storedMovieWishlist ? true : false;
    const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <div className="movie">
            <Link to={`/movie/${movieCardProps.id}`} className="link" onClick={() => showmovie(movieCardProps)}>
                <img src={IMG_API + movieCardProps.poster_path} alt={movieCardProps.title} />
            </Link>
            <div className="movie-info">
                <Link to={`/movie/${movieCardProps.id}`} className="link" onClick={() => showmovie(movieCardProps)}>
                    <h3>{movieCardProps.title ?? movieCardProps.name}</h3>
                </Link>
                <span><strong>Release date: </strong>{movieCardProps.release_date ?? movieCardProps.first_air_date} </span>
                <span><strong>Score: </strong>{movieCardProps.vote_average}</span>
                <div className="wrapper">
                    <button onClick={() => addMovieToWishlist(movieCardProps)} disabled={wishlistDisabled}>+ Wishlist</button>
                    <button onClick={() => addMovieToWatched(movieCardProps)} disabled={watchedDisabled}>+ Watched</button>
                </div>
            </div>
        </div>
    )
}
