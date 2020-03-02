import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import ListContainer from "./components/ListContainer";
import SelectedUser from "./components/SelectedUser";
import ListUsers from "./components/ListUsers";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route path="/" exact component={ListContainer} />
        <Route path="/user" exact component={ListUsers} />
        <Route path="/user/:id" component={SelectedUser} />
      </Provider>
    );
  }
}

export default App;
