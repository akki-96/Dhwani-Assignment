import "./styles.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import PieChartPage from "./PieChartPage";
export default function App() {
  const api = `https://jsonplaceholder.typicode.com/users`;
  const [user, setUser] = useState([]);
  const [pie, setPie] = useState(false);

  const apifunction = async () => {
    const apiData = await fetch(api, {
      method: "GET"
    });
    const apiDataJson = await apiData.json();
    setUser(apiDataJson);
    const userDataCopy = [...apiDataJson];
    // console.log({ apiDataJson });
  };

  useEffect(() => {
    apifunction();
  }, []);

  useEffect(() => {
    return () => console.log("Akki");
  }, [pie]);

  return (
    <div className="App">
      <Header />
      <Router>
        <Link exact to="/pie">
          {/* <button>Previous Page</button> */}
          <button onClick={() => setPie(true)}>Next Page</button>
        </Link>
        <Switch>
          <Route path="/pie">
            <PieChartPage />
          </Route>
        </Switch>
      </Router>
      {/* <button>Next Page</button> */}
      <HomePage user={user} />
    </div>
  );
}
