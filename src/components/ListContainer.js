import React from "react";
import { getImages } from "../actions";
import { connect } from "react-redux";
import List from "./List";

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }
  render() {
    if (this.props) {
      return (
        <div>
          <List images={this.props.images} jwt={this.props.user.jwt} />
        </div>
      );
    } else {
      return <h1>Loading..</h1>;
    }
  }
}

function mapStateToProps(state) {
  return { images: state.images, user: state.user };
}

const mapDispatchToProps = { getImages };

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
