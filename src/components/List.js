import React from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignUpFormContainer from "./SignUpFormContainer";

class List extends React.Component {
  state = {
    login: true
  };

  toSignUp = () => {
    this.setState({ login: !this.state.login });
  };

  render() {
    if (this.props.images) {
      return (
        <div>
          {this.state.login ? (
            <div>
              {!this.props.jwt ? (
                <div>
                  <h4>Login:</h4>
                  <LoginFormContainer />
                  <button onClick={this.toSignUp}>To Sign Up</button>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div>
              <h4>SignUp:</h4>
              {!this.props.jwt ? (
                <SignUpFormContainer toSignUp={this.toSignUp} signUp="true" />
              ) : (
                ""
              )}
              <button onClick={this.toSignUp}>To Sign In</button>
            </div>
          )}

          {!this.props.jwt ? "" : <CreateFormContainer />}
          <br></br>
          {this.props.images.map((image, index) => (
            <div key={index}>
              <h3>{image.title}</h3>
              <img
                src={image.url}
                alt={image.title}
                style={{ maxHeight: "250px", width: "auto" }}
              ></img>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

export default List;
