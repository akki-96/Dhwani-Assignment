import Header from "./Header";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
const PieChartPage = () => {
  return (
    <>
      <h1>Hi This is PieChart Page...</h1>
      <div className="parent">
        <Router>
          <Link exact to="/piechart">
            <button>Previous Page</button>
          </Link>
          <Switch>
            {/* <Route path="/">
            <HomePage />
          </Route> */}
            <Route path="/piechart">
              <PieChartPage />
            </Route>
          </Switch>
        </Router>

        <div className="userList"></div>
      </div>
    </>
  );
};
export default PieChartPage;
