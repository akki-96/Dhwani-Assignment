import Header from "./Header";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import HomePage from "./HomePage";
const PieChartPage = () => {
  return (
    <>
      <h1>Hi This is PieChart Page...</h1>
      <div className="parent">
        <Router>
          <Link exact to="/home">
            <button>Previous Page</button>
          </Link>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
          </Switch>
        </Router>

        <div className="userList"></div>
      </div>
    </>
  );
};
export default PieChartPage;
