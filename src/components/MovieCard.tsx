import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";


const IMG_API = "https://image.tmdb.org/t/p/w1280";


interface MovieCardProps {
    id: number,
    title: string,
    vote_average: number,
    poster_path: string,
    release_date: string,
    first_air_date: string,
    name: string,
    overview: string
}

export const MovieCard: React.FC<MovieCardProps> = (props: MovieCardProps) => {
    const { addMovieToWatchlist, addMovieToWatched, watchlist, watched, showmovie} = useContext(GlobalContext);

    let storedMovie = watchlist.find((o: MovieCardProps) => o.id === props.id);
    let storedMovieWatched = watched.find((o: MovieCardProps) => o.id === props.id);
    const watchlistDisabled = storedMovie ? true : false;
    const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <div className="movie">
            <Link to={`/movie/${props.id}`} className="link" onClick={() => showmovie(props)}>
                <img src={IMG_API + props.poster_path} alt={props.title} />
            </Link>
            <div className="movie-info">
                <Link to={`/movie/${props.id}`} className="link" onClick={() => showmovie(props)}>
                    <h3>{props.title ?? props.name}</h3>
                </Link>
                <span><strong>Release date: </strong>{props.release_date ?? props.first_air_date} </span>
                <span><strong>Score: </strong>{props.vote_average}</span>
                <div className="wrapper">
                    <button onClick={() => addMovieToWatchlist(props)} disabled={watchlistDisabled}>+ Wishlist</button>
                    <button onClick={() => addMovieToWatched(props)} disabled={watchedDisabled}>+ Watched</button>
                </div>
            </div>
        </div>
    )
}
