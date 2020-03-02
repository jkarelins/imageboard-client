import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions";
import Users from "./Users";

class ListUsers extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <div>
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
