import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Movies } from './Home';
import { MovieCard } from './MovieCard';

export const Profile = () => {
    const { wishlist, watched } = useContext(GlobalContext);
    return (
        <div>
            <h1>Wishlist</h1>
                {wishlist.length > 0 ? (
                    <div className="movie-container">
                        {wishlist.map((movie: Movies) => (
                            <MovieCard key={movie.id} {...movie} />))}
                    </div>
                ) : (<h2 className="no-movies">No movies in your wishlist, add some!</h2>)}
            <h1>Watched movies and shows</h1>
            {watched.length > 0 ?
                <div className="movie-container">
                    {watched.map((watch: Movies) => (
                        <MovieCard key={watch.id} {...watch} />))}
                </div>
                : <h2 className="no-movies">No watched movies and shows, add some!</h2>}
        </div>
    )
}
