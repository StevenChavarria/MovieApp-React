import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import { Movies } from "../components/Home";


const movie: Movies[] = [];

//initial state
const initialState = {
    watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist")!)
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched")!)
    : [], 
    addMovieToWatchlist: (movie: Movies) => {},
    addMovieToWatched: (movie: Movies) => {},
    showmovie: (movie: Movies) => {},
    movie
}

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props: any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched));
      }, [state]);

    //actions 
    const addMovieToWatchlist = (movie: Movies) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
    }

    const addMovieToWatched = (movie: Movies) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
      };

    const showmovie = (movie: Movies) => {
        dispatch({ type: "SHOW_MOVIE", payload: movie });
      };

    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            movie: state.movie,
            addMovieToWatchlist,
            addMovieToWatched,
            showmovie
        }}
        >
            {props.children}
        </GlobalContext.Provider>
    );

};
