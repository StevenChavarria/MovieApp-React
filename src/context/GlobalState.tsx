import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import { Movies } from "../components/Home";


const movie: Movies[] = [];


const initialState = {
  wishlist: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist")!)
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched")!)
    : [],
  addMovieToWishlist: (movie: Movies) => { },
  addMovieToWatched: (movie: Movies) => { },
  showmovie: (movie: Movies) => { },
  movie
}


export const GlobalContext = createContext(initialState);


export const GlobalProvider = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWishlist = (movie: Movies) => {
    dispatch({ type: "ADD_MOVIE_TO_WISHLIST", payload: movie })
  }

  const addMovieToWatched = (movie: Movies) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const showmovie = (movie: Movies) => {
    dispatch({ type: "SHOW_MOVIE", payload: movie });
  };

  return (
    <GlobalContext.Provider value={{
      wishlist: state.wishlist,
      watched: state.watched,
      movie: state.movie,
      addMovieToWishlist,
      addMovieToWatched,
      showmovie
    }}
    >
      {props.children}
    </GlobalContext.Provider>
  );

};
