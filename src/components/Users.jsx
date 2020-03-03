import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Users extends Component {
  render() {
    if (this.props.users) {
      return (
        <div>
          <ul>
            {this.props.users.map((user, i) => (
              <li>
                <Link to={`/user/${i}`} key={i}>
                  {user.email}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <h1>Loading..</h1>;
    }
  }
}
