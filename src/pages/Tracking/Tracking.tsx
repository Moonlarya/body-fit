import React, { FC } from "react";

import "./styles.scss";

const Tracking: FC = () => (
  <div className="wrapper">
    <h1>Track your success!</h1>
    <p className="subtitle text-center">
      Track yourself success with your selected program
    </p>
    <div className="table-section">
      <div className="overlay" />
      <table>
        <thead>
          <tr>
            <th>October 2020</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            {Array.from({ length: 31 }).map((el, index) => (
              <th>{index}</th>
            ))}
          </tr>
          <tr>
            <td>workout</td>
            <td className="active" />
            <td />
            <td className="active" />
            <td />
          </tr>
          <tr>
            <td>diet</td>
            <td className="active" />
            <td className="active" />
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Tracking;
