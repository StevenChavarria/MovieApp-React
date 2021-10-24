import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

interface MovieCardProps {
    id: number,
    title: string,
    vote_average: number,
    poster_path: string,
    release_date: string,
    first_air_date: string,
    name: string 
}

export const MovieCard:React.FC<MovieCardProps> = ({ title, vote_average, poster_path, release_date, name, first_air_date}) => {
    return (
        <div className="movie">
            <img src={IMG_API + poster_path} alt={title} />
            <div className="movie-info">
                <h3>{title ?? name}</h3>
                <span>{vote_average}</span>
                <span>{release_date ?? first_air_date}</span>
            </div>
        </div>
    )
}
