import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PieChartPage from "./PieChartPage";
const HomePage = ({ user }) => {
  console.log({ user });
  return (
    <div className="parent">
      <button>Next Page</button>
      <div className="userList">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {user.map((items) => (
              <>
                <tr>
                  <td>{items.id}</td>
                  <td>{items.title}</td>
                  <td>{items.completed ? "false" : "true"}</td>
                  <td>{items.userId}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default HomePage;
