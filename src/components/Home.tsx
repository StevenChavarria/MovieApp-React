import React, { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'

export interface Movies {
    id: number,
    title: string,
    vote_average: number,
    poster_path: string,
    release_date: string,
    first_air_date: string,
    name: string,
    addMovieToWatchlist?: any,
    overview: string
}

const UPCOMING_MOVIES_API = "https://api.themoviedb.org/3/movie/upcoming?api_key=d38ddd23464c5200b506ef110d6061b2&language=en-US&page=1"
const TOP_RATED_SHOWS = "https://api.themoviedb.org/3/tv/top_rated?api_key=d38ddd23464c5200b506ef110d6061b2&language=en-US&page=1"
const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?api_key=d38ddd23464c5200b506ef110d6061b2&language=en-US&page=1"
const MovieArray: Movies[] = [];


export const Home = () => {
    const [upcomingMovies, setUpcomingMovies] = useState(MovieArray);
    const [topRatedShows, setTopRatedShows] = useState(MovieArray);
    const [popularData, setPopularData] = useState(MovieArray);

    const getData = (API: string, setData: React.Dispatch<React.SetStateAction<Movies[]>>) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data.results);
            })
    }

    useEffect(() => {
        getData(UPCOMING_MOVIES_API, setUpcomingMovies);
        getData(TOP_RATED_SHOWS, setTopRatedShows);
        getData(POPULAR_MOVIES, setPopularData);
    }, []);

    return (
        <div>
            <h1>Popular Movies</h1>
            <div className="movie-container">
                {popularData.slice(0, 5).map((data) => (
                    <MovieCard key={data.id} {...data} />))}
            </div>
            <h1>Top-Rated TV Shows</h1>
            <div className="movie-container">
                {topRatedShows.slice(0, 5).map((show) => (
                    <MovieCard key={show.id} {...show} />))}
            </div>
            <h1>Upcoming Movies</h1>
            <div className="movie-container">
                {upcomingMovies.slice(0, 5).map((movie) => (
                    <MovieCard key={movie.id} {...movie} />))}
            </div>
        </div>
    );
}
