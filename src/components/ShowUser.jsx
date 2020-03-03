import React from "react";

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
          {this.props.images.map((image, index) => (
            <div key={index}>
              <h3>{image.title}</h3>
              <img src={image.url} alt={image.title} />
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
