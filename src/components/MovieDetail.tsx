import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Movies } from './Home';


export const MovieDetail = () => {
    const { movie} = useContext(GlobalContext);
    const test = movie[0];
    return (
        <div>
            <h1>{test.id}</h1>
            <h1>{test.release_date}</h1>
        </div>
    )
}
