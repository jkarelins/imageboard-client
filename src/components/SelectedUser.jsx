import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ShowUser from "./ShowUser";
import { getUsers } from "../actions";

class SelectedUser extends Component {
  componentDidMount(props) {
    this.props.getUsers();
  }
  render() {
    if (this.props.selectedUser) {
      return (
        <div>
          <Link to="/">All Images</Link>
          <h1>{this.props.selectedUser.email}</h1>
          <div>
            <ShowUser images={this.props.selectedUser.images} />
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

function mapStateToProps(state, props) {
  return {
    selectedUser: state.users[props.match.params.id]
  };
}

export default connect(mapStateToProps, { getUsers })(SelectedUser);
