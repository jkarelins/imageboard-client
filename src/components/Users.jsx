import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Users extends Component {
  render() {
    console.log(this.props);
    if (this.props) {
      return (
        <div>
          {this.props.users.map((user, i) => (
            <Link to={`/user/${i}`} key={i}>
              {user.email}
            </Link>
          ))}
        </div>
      );
    } else {
      return <h1>Loading..</h1>;
    }
  }
}
