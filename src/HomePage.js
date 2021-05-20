import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PieChartPage from "./PieChartPage";
const HomePage = ({ user }) => {
  console.log({ user });
  return (
    <div className="parent">
      <div className="userList">
        <table>
          <thead className="heads">
            <tr className="headName">
              <th>S_No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {user.map((items) => (
              <>
                <tr>
                  <td>{items.id}</td>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.address.city}</td>
                  <td>{items.website}</td>
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
