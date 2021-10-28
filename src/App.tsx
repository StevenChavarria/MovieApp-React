import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { GlobalProvider } from "./context/GlobalState";
import { Profile } from "./components/Profile";
import { MovieDetail } from "./components/MovieDetail";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;