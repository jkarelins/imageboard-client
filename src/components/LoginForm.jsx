import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    if (this.props) {
      return (
        <div>
          <form onSubmit={this.props.onSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.props.onChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.props.onChange}
            />
            {this.props.signUp ? (
              <input type="submit" value="Sign Up" />
            ) : (
              <input type="submit" value="Login" />
            )}
          </form>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
