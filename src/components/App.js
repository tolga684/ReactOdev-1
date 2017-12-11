import React, { Component } from "react";
import {createStore} from "redux";
import FormContainer from "./formContainer.js";
import ListContainer from "./listContainer.js";
import reducer from "./reducer.js";
import I from "immutable";
import "normalize.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {main: I.Map(), todos: I.List()};
    this.store = createStore(reducer);
    this.store.subscribe(() => {
      this.setState({
        main: this.store.getState(),
        todos: this.store.getState()
      });
    });
  }

  render() {
    return (
      <div className="app">
        <FormContainer
          currentInput={this.state.main.get("currentInput", "")}
          todos={this.state.todos}
          dispatch={this.store.dispatch}
        />
        <ListContainer
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
