import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions";
import Users from "./Users";
import { Link } from "react-router-dom";

class ListUsers extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <div>
        <Link to="/">All Images</Link>
        <h1>List of all users</h1>
        <Users users={this.props.users} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log(reduxState);
  return {
    users: reduxState.users
  };
}

export default connect(mapStateToProps, { getUsers })(ListUsers);
