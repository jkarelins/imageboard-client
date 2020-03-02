import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions";

class LoginFormContainer extends React.Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.login(this.state);
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

export default connect(null, { login })(LoginFormContainer);
