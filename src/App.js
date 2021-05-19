import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import PieChartPage from "./PieChartPage";
export default function App() {
  const api = `https://randomuser.me/api`;

  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}
