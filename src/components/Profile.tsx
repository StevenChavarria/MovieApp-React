import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Movies } from './Home';
import { MovieCard } from './MovieCard';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export const Profile = () => {
    const {watchlist, watched} = useContext(GlobalContext);
    return (
        <div>
            <h1>Wishlist</h1>
            <div className="movie-container">
                {watchlist.map((movie: Movies) => (
                    <MovieCard key={movie.id} {...movie} />))}
            </div>
            <h1>Watched movies and shows</h1>
            <div className="movie-container">
                {watched.map((watch: Movies) => (
                    <MovieCard key={watch.id} {...watch} />))}
            </div>
        </div>
    )
}
