import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
import { Profile } from "./components/Profile";
import { MovieDetail } from "./components/MovieDetail";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;