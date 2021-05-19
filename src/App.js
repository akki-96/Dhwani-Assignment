import "./styles.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import PieChartPage from "./PieChartPage";
export default function App() {
  const api = `https://jsonplaceholder.typicode.com/todos`;
  const [user, setUser] = useState([]);

  const apifunction = async () => {
    const apiData = await fetch(api, {
      method: "GET"
    });
    const apiDataJson = await apiData.json();
    setUser(apiDataJson);
    const userDataCopy = [...apiDataJson];
  };

  useEffect(() => {
    apifunction();
  }, []);

  return (
    <div className="App">
      <Header />
      <HomePage user={user} />
    </div>
  );
}
