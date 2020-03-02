import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List";

class SelectedUser extends Component {
  render() {
    console.log(this.props);
    if (this.props) {
      return (
        <div>
          <h1>{this.props.selectedUser.email}</h1>
          <div>
            <List images={this.props.selectedUser.images} />
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

export default connect(mapStateToProps)(SelectedUser);
