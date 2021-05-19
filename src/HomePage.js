import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PieChartPage from "./PieChartPage";
const HomePage = () => {
  return (
    <div className="parent">
      <Router>
        <Link exact to="/">
          <button>Next Page</button>
        </Link>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <div className="userList"></div>
    </div>
  );
};
export default HomePage;
