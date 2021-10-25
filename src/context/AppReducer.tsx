import { Movies } from "../components/Home";

export default (state: any, action: any) => {

  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watchlist.filter(
          (movie: Movies) => movie.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      }

    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie: Movies) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case "SHOW_MOVIE":
      return {
        ...state,
        movie: [action.payload, ...state.movie],
      };
    default:
      return state;
  }
};
