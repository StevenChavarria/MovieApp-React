import axios from 'axios';
import { useContext, useEffect, useState } from 'react'
//import { useParams } from 'react-router';
import StarsRating from 'react-star-rate';
import { GlobalContext } from '../context/GlobalState';
import "../styles/MovieDetail.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const GUEST_SESSION = "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=d38ddd23464c5200b506ef110d6061b2";
const guestid = { guest_session_id: 12354 }!;

export const MovieDetail = () => {
    const { movie } = useContext(GlobalContext);
    const movies = movie[0];
    const moviepath = `${IMG_API + movies?.poster_path}`;
    const [guest, setGuest] = useState(guestid);
    const [rating, setRating] = useState(0);
   // const { id } = useParams<{ id: string }>();
    const RATE_POST = `https://api.themoviedb.org/3/movie/${movies.id}/rating?api_key=d38ddd23464c5200b506ef110d6061b2&guest_session_id=${guest?.guest_session_id}`

    const getGuestSession = async () => {
        const { data } = await axios.get(GUEST_SESSION);
        setGuest(data);
      //  console.log(data)
    };

    useEffect(() => {
        getGuestSession();
    }, []);

    const handleSubmit = async (value: number) => {
        setRating(value)
        if (value > 0) {
            const rate = {
                "value": value
            };
            const request = await axios.post(RATE_POST, rate);
            console.log(`POST`, request);
        } 
    }

    return (
        <div>
            {movie.length > 0 ?
                <div className="movie_card">
                    <div className="info_section">
                        <div className="movie_header">
                            <img className="movie_poster" src={moviepath} alt={movies.title ?? movies.name} />
                            <h1>{movies.title ?? movies.name}</h1>
                        </div>
                        <div className="movie_desc">
                            <h4><strong>Release Date: </strong>{movies.release_date}</h4>
                            <h4><strong>Score: </strong>{movies.vote_average}</h4>
                            <h4><strong>Submit your rate:</strong></h4>
                            <StarsRating
                                count={10}
                                value={rating}
                                onChange={(value) => handleSubmit(value!)} />
                            <h3>Overview</h3>
                            <p className="text"> {movies.overview} </p>
                        </div>
                    </div>
                    <div className="blur_back" style={{ backgroundImage: `url(${moviepath})` }}></div>
                </div>
                : <h1 className="notAvalaible">Movie not available</h1>}
        </div>
    )
}