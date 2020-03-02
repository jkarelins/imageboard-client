import React, { Component } from "react";

export default class CreateForm extends Component {
  render() {
    if (this.props) {
      return (
        <div>
          <h1>Add Image:</h1>
          <form onSubmit={this.props.onSubmit}>
            <input
              type="text"
              name="url"
              placeholder="URL"
              onChange={this.props.onChange}
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.props.onChange}
            />
            <input type="submit" value="Add New" />
          </form>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
