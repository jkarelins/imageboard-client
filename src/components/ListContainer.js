import React from "react";
import { getImages } from "../actions";
import { connect } from "react-redux";
import List from "./List";

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }
  componentDidUpdate() {}
  render() {
    if (this.props) {
      return (
        <div>
          <h3 style={{ color: "red" }}>
            {this.props.errors ? this.props.errors : ""}
          </h3>
          <List images={this.props.images} jwt={this.props.user.jwt} />
        </div>
      );
    } else {
      return <h1>Loading..</h1>;
    }
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
    user: state.user.user,
    errors: state.user.errors
  };
}

const mapDispatchToProps = { getImages };

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
