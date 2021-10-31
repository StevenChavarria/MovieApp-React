import { Movies } from "../components/Home";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WISHLIST":
      return {
        ...state,
        watched: state.watched.filter(
         (movie: Movies) => movie.id !== action.payload.id
        ),
        wishlist: [action.payload, ...state.wishlist],
      }

    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        wishlist: state.wishlist.filter(
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

export default reducer