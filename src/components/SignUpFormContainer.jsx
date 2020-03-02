import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { signUp } from "../actions";

class SignUpFormContainer extends Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.signUp(this.state);
    this.setState({ email: "", password: "" });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(null, { signUp })(SignUpFormContainer);
