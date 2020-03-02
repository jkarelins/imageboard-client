import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { signUp } from "../actions";

class SignUpFormContainer extends Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.signUp(this.state);
    this.props.toSignUp();
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
          signUp={this.props.signUp}
        />
      </div>
    );
  }
}

export default connect(null, { signUp })(SignUpFormContainer);
