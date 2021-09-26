import { Link } from "react-router-dom";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import movies from "./Movies/movies.js";
import tvshows from "./Tvshows/tvshows.js";


export default function App() {
  return (
    <Router>
      <Switch>
       <Route extact path ="/Movies/movies.js"> component={public} />
         <movies />
         </Route>
         <Route extact path ="/TVshows/tvshows.js">
         <tvshows />
         </Route>
        </Switch>
    </Router>
  );
}